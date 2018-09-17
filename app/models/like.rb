class Like < ApplicationRecord
  validates :liker_id, :post_id, presence: true

  belongs_to :user,
  foreign_key: :liker_id,
  primary_key: :id,
  class_name: 'User'

  belongs_to :post,
  foreign_key: :post_id,
  primary_key: :id,
  class_name: 'Post'


end
