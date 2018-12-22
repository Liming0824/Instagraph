class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      # UserMailer.with(user: @user).welcome_email.deliver_now
      email = UserMailer.welcome_email(@user)
      email.deliver
      render 'api/users/show'
    else
      render json: ['Invalid username/password combination'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ['no user logged in'], status: 404
    end
  end
end
