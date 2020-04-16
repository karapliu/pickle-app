class AddServiceToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :members_service_id, :integer, null: false
    add_index :bookings, :members_service_id
  end
end
