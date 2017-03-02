class Piano < ApplicationRecord
  has_many :detail_photos, class_name: 'Photo'

end
