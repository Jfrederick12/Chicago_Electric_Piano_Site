class AddPrettyTimeToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :pretty_time, :string
  end
end
