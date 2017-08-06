Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#home'

  get '/user/signup', to: 'user#signup' #show signup page
  get '/user/login', to: 'user#login' #show login page
end
