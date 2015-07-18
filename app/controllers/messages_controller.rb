class MessagesController < ApplicationController
	def new
		@message = Message.new		
	end
	
	def create
	  	@message = Message.new(message_params)  	
	  	if @message.save
	  	  	MessageMailer.message_send(@message).deliver
			flash[:success] = "Message succesfully sent!"
	  	  	redirect_to home_path
	  	else
			flash[:danger] = "Message was not sent!"
			redirect_to home_path
	  	end

	end

	private
		def message_params
			params.require(:fullpage).permit(:email, :comment)
		end
end
