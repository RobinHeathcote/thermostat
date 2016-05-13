require 'sinatra/base'
require './models/temperature'

class Thermostat < Sinatra::Base



set :public_folder, proc {File.join(root)}

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    Temperature.store(params[:temperature])
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
     Temperature.get
  end

  get '/' do
    File.read('thermostat.html')
  end
run! if app_file == $0
end
