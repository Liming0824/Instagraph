class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
    end
    add_index :servers, :user_id
    add_index :servers, :channel_id
  end
end
