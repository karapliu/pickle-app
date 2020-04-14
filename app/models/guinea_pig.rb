# == Schema Information
#
# Table name: guinea_pigs
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  age        :integer          not null
#  sex        :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class GuineaPig < ApplicationRecord
  validates :name, :age, :sex, presence: true 

  has_one_attached :photo
  
  belongs_to :owner, 
    foreign_key: :owner_id, 
    class_name: :Member
end
