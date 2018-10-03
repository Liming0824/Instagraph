class ChangeColumnUser < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :bio, :string, default: ''
  end
end
