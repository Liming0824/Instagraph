Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root';
  namespace :api, defaults: {format: 'json'} do
    resources :users do
      get 'search', on: :collection
      #search_by_ids test routes
      get 'search_by_ids', on: :collection
      # test end
      delete '/follows' => 'users#destroyFollow'
      post '/follows' => 'users#createFollow'
      patch '/follows' => 'users#updateFollow'
    end
    resource :session, only: [:new, :create, :destroy]
    resources :posts, only: [:create, :index, :show, :destroy] do
      get '/likes' => 'posts#likes'
      delete '/likes' => 'posts#destroyLike'
      post '/likes' => 'posts#createLike'
      post '/comments' => 'posts#createComment'
    end
    resources :comments, only: [:destroy]
      # resources :likes, only: [:create]
    # resources :likes, only: [:destroy]
  end
end
