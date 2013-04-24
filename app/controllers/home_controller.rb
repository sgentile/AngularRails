class HomeController < ApplicationController
  #http_basic_authenticate_with :name => "steve", :password => "secret", :except => :login
  before_filter :authenticate #, :only => [:index]

  #respond_to :html
  def index
  end
  def login
    render :text => "Suppy your user name and password"
  end

  private
  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == "admin" && password == "secret"
    end
  end
end
