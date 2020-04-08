class Member < ApplicationRecord
  validates :first_name, :last_name, :zipcode, :password_digest, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :zipcode, numericality: { only_integer: true }
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token

  attr_reader :password

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