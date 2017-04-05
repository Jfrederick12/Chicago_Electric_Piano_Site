Rails.application.routes.draw do

  # resources :users, only: [:create, :new]

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/add_piano' => 'pianos#new'

  resources :detail_pictures

  resources :pianos do
    resources :photos
  end

  root to: 'site#index'
  # resources :pictures, only: [:new, :create, :index]
  # root to: 'pictures#index'

  namespace :api do
    namespace :v1 do
      resources :pictures
      # resources :pianos, only: [:index, :create, :destroy, :update, :find_photos]

    end
  end
  get 'pianos/:id/find_photo', :to => 'pianos#find_photos'


  get 'detail_pictures/photo_url', :to => 'detail_pictures#photo_url'

end
