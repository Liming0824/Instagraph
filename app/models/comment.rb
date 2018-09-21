# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  post_id    :integer          not null
#  author_id  :integer          not null
#  noticed    :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :post_id, :author_id, presence: true

    belongs_to :post,
    foreign_key: :post_id,
    primary_key: :id,
    class_name: 'Post'

    belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'User'

    has_one :post_author,
    through: :post,
    source: :user


end
