class Api::V1::PianosController < ApplicationController
  # need to figure out how to connect this controller up with base_controller
  respond_to :json

  def index
    respond_with Piano.all
  end

  def create
    respond_with :api, :v1, Piano.create(piano_params)
  end

  def destroy
    respond_with Piano.destroy(params[:id])
  end

  def update
    piano = Piano.find(params[:id])
    piano.update_attributes(piano_params)
    respond_with piano, json: piano
  end

  private

  def piano_params
    params.require(:piano).permit(:id, :make, :model, :year, :description, :photo, :price)
  end
end