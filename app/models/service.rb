# == Schema Information
#
# Table name: services
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Service < ApplicationRecord
  validates :name, presence: true

  has_many :ms,
    foreign_key: :service_id, 
    class_name: :MembersService

  has_many :providers, 
    through: :ms, 
    source: :member
end
