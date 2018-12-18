class Api::UsersController < ApplicationController


  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
      debugger
      UserMailer.welcome_email(@user).deliver
      debugger
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update_attributes(update_user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    post_ids = @user.posts.map{|post| post.id}
    @posts = Post.find(post_ids)
    render :show
  end

  def search
    if params[:query].present?
      query_string = "%#{params[:query]}%".downcase
      @users = User.where("LOWER(username) LIKE ?", query_string)
    else
      @user = User.none
    end
    render :search
  end



  def search_by_ids
    if params[:arr].present?
      arr = params[:arr].map{|el| el.to_i}
      @users = User.find(arr)
    else
      @users = User.none
    end
    render :search
  end

  def destroyFollow
    @user = User.find(params[:user_id])
    @follow = @user.follower_records.where(follower_id: current_user.id)
    @follow = @follow.destroy_all.first
    if @follow
      render '/api/follows/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end


  def createFollow
    @follow = Follow.new(follower_id: current_user.id, followee_id: params[:user_id])
    if @follow.save
      render '/api/follows/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end


  def updateFollow
    @user = User.find(params[:user_id])
    @follow = @user.followings_records.where(followee_id: current_user.id)[0]
    if @follow.update({noticed: true})
      render '/api/follows/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end



  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def update_user
    if params[:user][:user_photo] == 'null'
      params.require(:user).permit(:bio)
    else
      params.require(:user).permit(:bio, :user_photo)
    end
  end



end
