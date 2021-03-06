class Booking < ApplicationRecord
  validates :start_date, :end_date, presence: true

  belongs_to :sitter,
    foreign_key: :sitter_id, 
    class_name: :Member

  belongs_to :owner, 
    foreign_key: :owner_id, 
    class_name: :Member

  belongs_to :service, 
    foreign_key: :members_service_id, 
    class_name: :MembersService
end