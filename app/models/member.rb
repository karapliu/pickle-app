# == Schema Information
#
# Table name: members
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  zipcode         :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  about_me        :text
#  hosting_max     :integer
#
class Member < ApplicationRecord
  validates :first_name, :last_name, :zipcode, :password_digest, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :zipcode, numericality: { only_integer: true }
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :ms,
    foreign_key: :member_id, 
    class_name: :MembersService

  has_many :services, 
    through: :ms, 
    source: :service

  has_many :guinea_pigs, 
    foreign_key: :owner_id, 
    class_name: :GuineaPig

  belongs_to :job_booking,
    foreign_key: :sitter_id, 
    class_name: :Booking

  belongs_to :pet_booking, 
    foreign_key: :owner_id, 
    class_name: :Booking

  has_one_attached :profile_pic
  has_many_attached :photos

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.update!(session_token: self.class.generate_session_token)
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypt_password = BCrypt::Password.new(self.password_digest)
    bcrypt_password.is_password?(password)
  end

  def self.find_by_credentials(email, password) 
    member = Member.find_by(email: email)
    return nil unless member && member.is_password?(password)
    member
  end
end
