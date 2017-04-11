class PostsController < ApplicationController
  respond_to :json

  def index
    @posts = Post.all
    # respond_with @posts, json: @posts
    respond_to do |format|
      format.html {render :index}
      format.json { render json: @posts }
    end
  end

  private

  def post_params
    params.require(:post).permit(:id, :name, :body, :author_id)
  end
end
