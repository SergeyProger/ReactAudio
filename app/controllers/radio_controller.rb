class RadioController < ApplicationController

  http_basic_authenticate_with name: "test", password: "1234qwer", except: [:index, :show]

  def index
    @radio = Radio.all
  end

  private
  def radio_params
    params.require(:radio).permit(:r_name, :r_url)
  end
end
