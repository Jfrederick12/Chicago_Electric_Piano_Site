class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :name
      t.text :description
      t.integer :piano_id

      t.timestamps
    end
  end
end
