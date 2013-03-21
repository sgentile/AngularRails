class MovieController < ApplicationController
  respond_to :json 
  def index 
    respond_with(@movies = Movie.all)
  end

  def show
    @movie = Movie.find(params[:id])
    respond_with(@movie)
  end

  def update 
    @movie = Movie.find(params[:id])
    #if @movie.update_attributes(params[:movie])
      #respond.with({head :no_content})
      
   # else
      #respond_with({render json: @movie.errors, status: :unprocessable_entity }
    #end
    respond_to do |format|
      if @movie.update_attributes(params[:movie])
        format.json { head :no_content }
      else
        format.json { render json: @movie.errors, status: :unprocessable_entity }
      end
    end
  end
end
