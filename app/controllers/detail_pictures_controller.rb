class DetailPicturesController < ApplicationController
  before_action :set_detail_picture, only: [:show, :edit, :update, :destroy]
  respond_to :json

  # GET /detail_pictures
  # GET /detail_pictures.json
  def index
    @pic_images = []
    @detail_pictures = DetailPicture.all
    @detail_pictures.map { |picture| @pic_images << picture.image.url }
    respond_with @detail_pictures do |format|
      format.json {render :json => @pic_images, :layout => false }
    end
  end

  # GET /detail_pictures/1
  # GET /detail_pictures/1.json
  def show
  end

  # GET /detail_pictures/new
  def new
    @detail_picture = DetailPicture.new
  end

  # GET /detail_pictures/1/edit
  def edit
  end

  # POST /detail_pictures
  # POST /detail_pictures.json
  def create
    @detail_picture = DetailPicture.new(detail_picture_params)

    respond_to do |format|
      if @detail_picture.save
        format.html { redirect_to @detail_picture, notice: 'Detail picture was successfully created.' }
        format.json { render :show, status: :created, location: @detail_picture }
      else
        format.html { render :new }
        format.json { render json: @detail_picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /detail_pictures/1
  # PATCH/PUT /detail_pictures/1.json
  def update
    respond_to do |format|
      if @detail_picture.update(detail_picture_params)
        format.html { redirect_to @detail_picture, notice: 'Detail picture was successfully updated.' }
        format.json { render :show, status: :ok, location: @detail_picture }
      else
        format.html { render :edit }
        format.json { render json: @detail_picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /detail_pictures/1
  # DELETE /detail_pictures/1.json
  def destroy
    @detail_picture.destroy
    respond_to do |format|
      format.html { redirect_to detail_pictures_url, notice: 'Detail picture was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_detail_picture
      @detail_picture = DetailPicture.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def detail_picture_params
      params.require(:detail_picture).permit(:image, :title)
    end
end
