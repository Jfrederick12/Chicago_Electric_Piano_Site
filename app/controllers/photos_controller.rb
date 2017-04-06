class PhotosController < ApplicationController
  respond_to :json

  def index
    respond_with Photo.all
  end

  def new
    if current_user && session[:user_id] = current_user.id 
      @piano = Piano.find(params[:piano_id])
      @photo = Photo.new
    else
      redirect_to '/'
    end
  end

  # def create
  #   respond_with :api, :v1, Photo.create(photo_params)
  # end

  def create
    @piano = Piano.find(params[:piano_id])
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
    @piano = Piano.find(params[:piano_id])
    Photo.destroy(params[:id])
    redirect_to @piano, notice: 'Photo was successfully destroyed.'
  end

  private

  def photo_params
    params.require(:photo).permit(:id, :name, :description, :url, :piano_id, :image)
  end
end