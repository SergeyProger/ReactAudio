class Radio < ApplicationRecord
  validates :r_name, presence: true
  validates :r_url, :format => URI::regexp(%w(http https))
  validates :r_name, :r_url, uniqueness: true
end
