class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.float :funds
      t.float :net_worth
      #how to reference currencies and transactions bleaugh


      t.timestamps
    end
  end
end
