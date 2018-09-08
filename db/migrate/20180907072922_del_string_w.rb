class DelStringW < ActiveRecord::Migration[5.1]
  def change
    remove_column :writes, :string
  end
end
