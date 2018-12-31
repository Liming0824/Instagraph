# == Schema Information
#
# Table name: servers
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#

class Server < ApplicationRecord
  validates :user_id, :channel_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: 'User'

  belongs_to :channel,
  foreign_key: :channel_id,
  primary_key: :id,
  class_name: 'Channel'


end
