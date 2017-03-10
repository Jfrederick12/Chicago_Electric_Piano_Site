class Photo < ApplicationRecord
  belongs_to :piano
  dragonfly_accessor :image

  def piano
    Photo.find(self.piano_id)
  end
end
