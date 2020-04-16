class AddMessageToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :message, :text
  end
end
