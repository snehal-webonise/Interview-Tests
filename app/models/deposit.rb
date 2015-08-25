class Deposit < ActiveRecord::Base
  validates :amount, presence: true
  validates :type, presence: true
  validates :maturity_proceeds, presence: true
  validates :mob_no, presence: true
  validates :email, presence: true
end
