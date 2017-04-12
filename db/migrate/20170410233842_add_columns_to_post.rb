class AddColumnsToPost < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :name, :string
    add_column :posts, :body, :text
    add_column :posts, :author_id, :integer
  end
end
