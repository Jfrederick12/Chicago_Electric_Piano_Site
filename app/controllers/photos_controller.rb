class PhotosController < ApplicationController
  respond_to :json

  def index
    respond_with Photo.all
  end

  def new
    @piano = Piano.find(1)
    @photo = Photo.new
  end

  # def create
  #   respond_with :api, :v1, Photo.create(photo_params)
  # end

  def create
    @piano = Piano.find(1)
    @photo = Photo.new(photo_params)
    @photo.piano_id = @piano.id

    respond_to do |format|
      if @photo.save
        format.html { redirect_to @piano, notice: 'Detail picture was successfully created.' }
        format.json { render :show, status: :created, location: @photo }
      else
        format.html { render :new }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    respond_with Photo.destroy(params[:id])
  end

  private

  def photo_params
    params.require(:photo).permit(:id, :name, :description, :url, :piano_id, :image)
  end
end