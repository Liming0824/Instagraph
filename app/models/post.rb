# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :user_id, :image_url, presence: true

  has_one_attached :photo

  has_many :likes,
  foreign_key: :post_id,
  primary_key: :id,
  class_name: 'Like'

  has_many :comments,
  foreign_key: :post_id,
  primary_key: :id,
  class_name: 'Comment'

  belongs_to :user,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: 'User'


end
