class MovieController < ApplicationController
  respond_to :json 
  def show 
    respond_with(@movies = Movie.all)
  end
end
