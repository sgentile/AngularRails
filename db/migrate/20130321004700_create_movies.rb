class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :name
      t.boolean :seen

      t.timestamps
    end
  end
end
