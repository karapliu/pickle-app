Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :members, only: [:create, :show, :update] do 
      resources :members_services, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :members_services, only: [:create, :update, :destroy]
  end
end
