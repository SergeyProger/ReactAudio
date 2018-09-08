class WelcomController < ApplicationController
  def index
    @radio = Radio.all
  end
end
