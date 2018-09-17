class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    @users = User.all
    render :index
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end


  def show
    @post = Post.find(params[:id])
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy if @post
    render :show
  end

  def createLike
    @post = Post.find(params[:post_id])
    @like = @post.likes.new(liker_id: current_user.id)
    if @like.save
      render '/api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroyLike
    @post = Post.find(params[:post_id])
    @like = @post.likes.where(liker_id: current_user.id)
    @like = @like.destroy_all.first
    if @like
      render '/api/likes/show'
    else
      render json: ['Cannot find this like'], status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:image_url, :photo)
  end



end
