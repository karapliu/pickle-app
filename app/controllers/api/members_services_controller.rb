class Api::MembersServicesController < ApplicationController
  def index
    # @services = Service.all
    @member = Member.find(params[:member_id])
    
    render 'api/members_services/index'
  end

  def create

  end

  def update

  end

  def destroy

  end
end