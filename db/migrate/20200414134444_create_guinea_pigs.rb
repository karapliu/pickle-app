class CreateGuineaPigs < ActiveRecord::Migration[5.2]
  def change
    create_table :guinea_pigs do |t|
      t.string :name, null: false
      t.integer :age, null: false
      t.string :sex, null: false 
      t.integer :owner_id, null: false 
      t.timestamps
    end

    add_index :guinea_pigs, :name
    add_index :guinea_pigs, :owner_id
  end
end
