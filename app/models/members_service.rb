# == Schema Information
#
# Table name: members_services
#
#  id         :bigint           not null, primary key
#  price      :integer          not null
#  member_id  :integer          not null
#  service_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class MembersService < ApplicationRecord
  validates :price, presence: true
  validates :member_id, :service_id, presence: true

  belongs_to :member,
    foreign_key: :member_id, 
    class_name: :Member
    
  belongs_to :service,
    foreign_key: :service_id, 
    class_name: :Service
end
