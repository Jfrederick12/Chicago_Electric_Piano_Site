class Photo < ApplicationRecord
  belongs_to :piano

  def piano
    Photo.find(self.piano_id)
  end
end
