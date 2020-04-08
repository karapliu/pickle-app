class MembersServicesController < ApplicationController
  def index
    @services = MembersService.where(member_id: params[:member_id])
    
    render 'api/members_services/index'
  end

  def create

  end

  def update

  end

  def destroy

  end
end