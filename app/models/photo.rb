class Photo < ApplicationRecord
  belongs_to :piano
  dragonfly_accessor :image

  # validates_property :width, :of => :image, :in => (0..700)

  def piano
    Photo.find(self.piano_id)
  end
end
