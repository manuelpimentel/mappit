class CreateFullpages < ActiveRecord::Migration
  def change
    create_table :fullpages do |t|
      t.string :email
      t.string :comment

      t.timestamps null: false
    end
  end
end
