class AddHeadlineToMember < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :headline, :string
  end
end
