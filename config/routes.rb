Rails.application.routes.draw do

  get 'page4/index'

  get 'page3/index'

  get 'page2/index'

  get 'messages/new'

  get 'messages/create'

  get 'fullpage/new'

  get 'fullpage/create'

  root 'fullpage#new' 

  get 'page4' => 'page4#index'

  get 'page3' => 'page3#index'

  get 'page2' => 'page2#index'

  get 'home' => 'fullpage#new'

  post 'home' => 'fullpage#create'

  get 'message'	=>	'messages#new'

  post 'message'	=> 'messages#create'


  resources :fullpage
  resources :messages
end
