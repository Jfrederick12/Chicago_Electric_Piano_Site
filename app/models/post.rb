class Post < ApplicationRecord
  belongs_to :author, class_name: :User
  has_many :comments
  after_save :pretty_time

  def pretty_time 
  	self.pretty_time = self.created_at.strftime("%I:%M%p %m/%d/%Y")
  end
end
