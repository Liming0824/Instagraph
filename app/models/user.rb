# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_img_url    :string
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :session_token, :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :bio, length: {maximum: 30, allow_nil: true}
  attr_reader :password

  after_initialize :ensure_session_token
  after_initialize :add_default_photo, on: [:create, :update]

  has_one_attached :user_photo


  has_many :posts,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: 'Post'

  has_many :likes,
  foreign_key: :liker_id,
  primary_key: :id,
  class_name: 'Like'





  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end


  def add_default_photo
    unless user_photo.attached?
      self.user_photo.attach(io: File.open("/Users/limingkang/Documents/Full_Stack_Project/Instagraph/app/assets/images/default_user_img.png"), filename: 'default_user_img.png')
    end
  end

end
