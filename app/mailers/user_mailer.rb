class UserMailer < ApplicationMailer
  default from: 'lkang9208@yahoo.com'

  def welcome_email(user)
    @user = user
    # @user = params[:user]
    @url  = 'http://example.com/login'
    mail(to: 'limingkang0824@gmail.com', subject: 'Welcome to My Awesome Site', from: 'lkang9208@yahoo.com')
    # mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
