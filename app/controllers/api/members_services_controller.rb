class Api::MembersServicesController < ApplicationController
  def index
    # @services = Service.all
    @member = Member.find(params[:member_id])
    
    render 'api/members_services/index'
  end

  def create

  end

  def update
    @member = Member.find(params[:member_id])

    render 'api/members_services/index'
  end

  def destroy

  end

  private

  def member_services_params 
    params.require(:member_services).permit(:member_id, :service_id, :price)
  end
end