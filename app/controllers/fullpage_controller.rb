class FullpageController < ApplicationController
	def new
		@fullpage = Fullpage.new
	end
	
	def create		
	  	@fullpage = Fullpage.new(message_params)
	  	if @fullpage.save
	  	  	MessageMailer.message_send(@fullpage).deliver
			flash[:notice] = "Message succesfully sent!"
	  	  	redirect_to message_path
	  	else
			render 'new'
			flash.now[:notice] = "Message was not sent!"
	  	end
	end

	private
		def message_params
			params.require(:fullpage).permit(':email', :comment)
		end
end