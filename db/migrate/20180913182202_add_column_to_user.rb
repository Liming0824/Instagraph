class AddColumnToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :user_img_url, :string
  end
end
