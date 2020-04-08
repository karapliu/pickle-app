class Service < ApplicationRecord
  validates :type, presence: true

  belongs_to :ms,
    foreign_key: :service_id, 
    class_name: :MembersService

  has_many :providers, 
    through: :ms, 
    source: :member
end