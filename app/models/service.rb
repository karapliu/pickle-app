class Service < ApplicationRecord
  validates :name, presence: true

  has_many :ms,
    foreign_key: :service_id, 
    class_name: :MembersService

  has_many :providers, 
    through: :ms, 
    source: :member
end