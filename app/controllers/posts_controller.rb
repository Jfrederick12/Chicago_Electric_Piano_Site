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

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(name: params[:name], body: params[:body])
    @post.author_id = params[:current_user]

    respond_to do |format|
      if current_user && session[:user_id] = current_user.id 
        if @post.save
          format.html { redirect_to '/posts' }
          format.json { render :show, status: :created, location: @post }
        else
          format.html { render :new }
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      else
        redirect_to '/'
      end
    end 
  end

  private

  def post_params
    params.require(:post).permit(:id, :name, :body, :author_id)
  end
end
