class AddDescriptionToMovie < ActiveRecord::Migration
  def change
    add_column :movies, :description, :string
  end
end
