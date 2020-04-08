class ChangeHostingPrefToMax < ActiveRecord::Migration[5.2]
  def change
    rename_column :members, :hosting_pref, :hosting_max
  end
end
