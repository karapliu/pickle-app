class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.integer :zipcode, null: false
      t.string :password_digest, null: false 
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :members, :email, unique: true
    add_index :members, :session_token, unique: true
  end
end
