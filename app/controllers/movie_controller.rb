class MovieController < ApplicationController
  respond_to :json 
  def index 
    respond_with(@movies = Movie.all)
  end
  def show
    @movie = Movie.find(params[:id])
    respond_with(@movie)
  end
end
