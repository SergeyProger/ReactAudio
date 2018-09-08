class DelString < ActiveRecord::Migration[5.1]
  def change
      remove_column :radios, :string
  end
end
