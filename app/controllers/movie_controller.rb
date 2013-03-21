class MovieController < ApplicationController
  respond_to :json 
  def index 
    respond_with(@movies = Movie.all)
  end
end
