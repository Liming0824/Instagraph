class Api::CommentsController < ApplicationController

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy if @comment
    render :show
  end

end
