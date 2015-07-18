class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
    	t.string :email
      	t.string :comment

      t.timestamps null: false
    end
  end
end
