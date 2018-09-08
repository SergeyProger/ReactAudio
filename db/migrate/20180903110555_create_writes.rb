class CreateWrites < ActiveRecord::Migration[5.1]
  def change
    create_table :writes do |t|
      t.string :title
      t.string :string
      t.string :text
      t.string :text

      t.timestamps
    end
  end
end
