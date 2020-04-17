Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :members, only: [:index, :create, :show, :update] do 
      resources :members_services, only: [:index]
      resources :guinea_pigs, only: [:index]
      resources :bookings, only: [:create]
    end
    resource :session, only: [:create, :destroy]
    patch 'members_services/update', to: 'members_services#mass_update'
    resources :members_services, only: [:create, :update, :destroy]
    resources :guinea_pigs, only: [:show, :create, :update, :destroy]
    resources :bookings, only: [:index]
  end
end
