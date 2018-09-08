class CreateRadios < ActiveRecord::Migration[5.1]
  def change
    create_table :radios do |t|
      t.string :r_name
      t.string :string
      t.string :r_url
      t.string :string

      t.timestamps
    end
  end
end
