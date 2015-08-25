class CreateDeposits < ActiveRecord::Migration
  def change
    create_table :deposits do |t|
      t.integer :acc_no
      t.float :amount
      t.string :type
      t.string :tenure_date
      t.string :pan_no
      t.boolean :maturity_proceeds
      t.integer :mob_no
      t.string :email

      t.timestamps null: false
    end
  end
end
