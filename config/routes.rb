Rails.application.routes.draw do
  get 'rooms/show'
  devise_for :users
  get 'room/show'
end
