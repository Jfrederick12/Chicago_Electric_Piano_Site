Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  # resources :users, only: [:create, :new]

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  get '/users' => 'users#index'

  get '/add_piano' => 'pianos#new'

  resources :detail_pictures

  resources :pianos do
    resources :photos
  end

  resources :posts do
    resources :comments
  end


  get '/blog' => 'site#blog'

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
