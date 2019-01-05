class RadioController < ApplicationController
  protect_from_forgery with: :null_session
  http_basic_authenticate_with name: "test", password: "1234qwer", except: [:index, :show]

  def index
    @radio = Radio.all
  end

  def update
    radio = Radio.find(params[:id])
    radio.update_attributes(radio_params)
    respond_to do |format|
      format.json {render json: radio, status: :ok}
    end
  end

  def create
     radio = Radio.new(radio_params)
     if radio.valid?
       radio.save
       respond_to do |format|
         format.json {render json: radio, status: :ok}
       end
     end
  end


  def destroy
    radio = Radio.find(params[:id])
    if(radio)
      radio.delete
      respond_to do |format|
        format.json {render json: radio, status: :ok}
      end
    end
  end

  private
  def radio_params
    params.require(:radio).permit(:id, :r_name, :r_url)
  end
end
