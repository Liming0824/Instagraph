# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  body       :string           not null
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord

  # has_many :servers,
  # foreign_key: :channel_id,
  # primary_key: :id,
  # class_name: "Server"


end
