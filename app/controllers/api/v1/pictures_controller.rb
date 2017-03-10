class Api::V1::PicturesController < ApplicationController
  # respond_to :json

  def index
    @pictures = Picture.all
  end

  def new
    @picture = Picture.new
  end

  def create
    @picture = Picture.new(picture_params)
    if @picture.save
      flash[:success] = "Photo Saved!"
      redirect_to photos_path
    else
      render 'new'
    end
  end

  private

  def picture_params
    params.require(:picture).permit(:image, :title)
  end

end