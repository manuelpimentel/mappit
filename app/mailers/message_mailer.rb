class MessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.message.subject
  #


  
  def message_send(message)
    @message = message
    mail(to: 'manuelpimentel16@gmail.com', from: @message.email, subject: "contact")
  end
end
