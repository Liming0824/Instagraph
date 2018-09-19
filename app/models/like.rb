# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  post_id    :integer          not null
#  liker_id   :integer          not null
#  noticed    :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
