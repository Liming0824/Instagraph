# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  noticed     :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, :followee_id, presence: true

  belongs_to :follower,
  foreign_key: :follower_id,
  primary_key: :id
  class_name: 'User'

  belongs_to :followee,
  foreign_key: :followee_id,
  primary_key: :id
  class_name: 'User'

end
