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

  def create
    @comment = Comment.new(comment_params)
    @comment.post_id = params[:post_id]

    if @comment.save
      respond_with @comment, json: @comment
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :body, :commenter, :post_id)
  end
end