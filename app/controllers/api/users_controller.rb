class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
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
    render :show
  end

  def search
    if params[:query].present?
      @users = User.where('username ~ ?', params[:query])
    else
      @user = User.none
    end
    render :search
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def update_user
    params.require(:user).permit(:bio, :user_photo)
  end

end
