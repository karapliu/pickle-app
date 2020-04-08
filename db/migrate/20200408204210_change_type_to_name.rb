class ChangeTypeToName < ActiveRecord::Migration[5.2]
  def change
    rename_column :services, :type, :name
  end
end
