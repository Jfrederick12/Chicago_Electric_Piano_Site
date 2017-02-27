class CreatePianos < ActiveRecord::Migration[5.0]
  def change
    create_table :pianos do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.string :description
      t.string :photo
      t.integer :price

      t.timestamps
    end
  end
end
