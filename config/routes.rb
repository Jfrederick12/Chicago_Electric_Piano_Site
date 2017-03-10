Rails.application.routes.draw do
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
