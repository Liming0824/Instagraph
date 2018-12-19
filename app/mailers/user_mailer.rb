class UserMailer < ApplicationMailer
  default from: 'lkang9208@yahoo.com'

  def welcome_email
    @user = params[:user]
    @url  = 'http://example.com/login'
    mail(to: 'lkang9208@yahoo.com', subject: 'Welcome to My Awesome Site')
    # mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
