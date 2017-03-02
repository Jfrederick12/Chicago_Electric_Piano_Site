Rails.application.routes.draw do
  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      # resources :pianos, :photos
      resources :pianos, only: [:index, :create, :destroy, :update, :find_photos]
    end
  end
  get 'api/v1/pianos/:id/find_photo', :to => 'api/v1/pianos#find_photos'
end
