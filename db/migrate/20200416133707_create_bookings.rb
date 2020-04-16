class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :sitter_id, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end

    add_index :bookings, :sitter_id
    add_index :bookings, :owner_id
  end
end
