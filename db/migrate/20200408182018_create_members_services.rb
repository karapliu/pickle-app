class CreateMembersServices < ActiveRecord::Migration[5.2]
  def change
    create_table :members_services do |t|
      t.integer :price, null: false
      t.integer :member_id, null: false
      t.integer :service_id, null: false
      t.timestamps
    end

    add_index :members_services, :member_id
    add_index :members_services, :service_id
  end
end
