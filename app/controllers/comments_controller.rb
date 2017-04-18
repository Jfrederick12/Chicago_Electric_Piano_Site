class CommentsController < ApplicationController
  respond_to :json

  def index
    @comments = Comment.where(post_id: params[:post_id])
    # respond_with @posts, json: @posts
    respond_to do |format|
      format.html {render :index}
      format.json { render json: @comments }
    end
  end

  def new
    @comment = Comment.new(comment_params)
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.post_id = params[:post_id]

    respond_to do |format|
      if @comment.save
        format.html { redirect_to '/posts'}
        format.json { render json: @comment }
      else
        format.html { redirect_to '/' }
        format.json { render json: @comment }
      end
    end
  end

  private

  def comment_params
    params.permit(:id, :body, :commenter, :post_id)
  end
end