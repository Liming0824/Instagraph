class UserMailer < ApplicationMailer
  default from: 'no-reply@Instagraph.com'

  def welcome_email(user)
    @user = user
    # @user = params[:user]
    @url  = 'https://best-instagraph.herokuapp.com'
    mail(to: 'lkang9208@yahoo.com', subject: 'Welcome to My Awesome Site')
    # mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
