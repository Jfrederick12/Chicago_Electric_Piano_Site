require 'bcrypt'

class User < ApplicationRecord
  include BCrypt

  has_many :posts, foreign_key: :author_id

  validates :username, :presence => true, :uniqueness => true, :length => { :in => 3..20 }
  validates :email, :presence => true
  validates :password, :confirmation => true

  def password
    @password ||= Password.new(encrypted_password)
  end

  def password=(new_password)
    @raw_password = new_password
    @password = Password.create(@raw_password)
    self.encrypted_password = @password
  end

  def password_errors
    if @raw_password.length < 5
      errors.add(:password, "Password must be at least 5 characters")
    end
  end


  def authenticate(password)
    self.password == password
  end


end
