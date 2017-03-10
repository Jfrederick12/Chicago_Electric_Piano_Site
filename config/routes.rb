Rails.application.routes.draw do
  resources :detail_pictures
  root to: 'site#index'
  # resources :pictures, only: [:new, :create, :index]
  # root to: 'pictures#index'

  namespace :api do
    namespace :v1 do
      resources :pianos, :pictures
      # resources :pianos, only: [:index, :create, :destroy, :update, :find_photos]

    end
  end
  get 'api/v1/pianos/:id/find_photo', :to => 'api/v1/pianos#find_photos'


  get 'detail_pictures/photo_url', :to => 'detail_pictures#photo_url'
end
