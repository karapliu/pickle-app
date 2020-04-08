class AddToMembersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :about_me, :text 
    add_column :members, :hosting_pref, :integer
  end
end
