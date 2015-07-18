class Fullpage < ActiveRecord::Base
before_save { self.email = email.downcase }
  validates :comment,  presence: true, length: { maximum: 300 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }
end
