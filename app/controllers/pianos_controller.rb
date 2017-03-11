class PianosController < ApplicationController
  # need to figure out how to connect this controller up with base_controller
  respond_to :json

  def index
    respond_with Piano.all
  end

  def new
    @piano = Piano.new
  end

  def show
    @piano = Piano.find(params[:id])
  end

  def create
    @piano = Piano.new(piano_params)

    respond_to do |format|
      if @piano.save
        format.html { redirect_to @piano, notice: 'Detail picture was successfully created.' }
        format.json { render :show, status: :created, location: @piano }
      else
        format.html { render :new }
        format.json { render json: @piano.errors, status: :unprocessable_entity }
      end
    end
  end

  # def create
  #   respond_with :api, :v1, Piano.create(piano_params)
  # end

  def destroy
    respond_with Piano.destroy(params[:id])
  end

  def update
    piano = Piano.find(params[:id])
    piano.update_attributes(piano_params)
    respond_with piano, json: piano
  end

  def find_photos
    collected_image_urls = []
    piano = Piano.find(params[:id])
    photo = piano.detail_photos
    photo.map {|image| collected_image_urls << image.image.url }
    respond_with photo, json: collected_image_urls
  end

  private

  def piano_params
    params.require(:piano).permit(:id, :make, :model, :year, :description, :photo, :price)
  end
end