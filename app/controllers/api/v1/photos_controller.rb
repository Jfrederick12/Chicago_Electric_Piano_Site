class Api::V1::PhotosController < ApplicationController
  respond_to :json

  def index
    respond_with Photo.all
  end

  def create
    respond_with :api, :v1, Photo.create(photo_params)
  end

  def destroy
    respond_with Photo.destroy(params[:id])
  end

  private

  def photo_params
    params.require(:photo).permit(:id, :name, :description, :url, :piano_id)
  end
end