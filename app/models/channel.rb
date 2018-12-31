# == Schema Information
#
# Table name: channels
#
#  id   :bigint(8)        not null, primary key
#  name :string
#

class Channel < ApplicationRecord

  has_many :servers,
  foreign_key: :channel_id,
  primary_key: :id,
  class_name: "Server"


end
