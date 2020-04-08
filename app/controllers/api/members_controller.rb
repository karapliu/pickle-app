class Api::MembersController < ApplicationController
  def show
    @member = Member.find_by(id: params[:id])
    @services = @member.services

    if @member
      render 'api/members/show'
    else
      render json: ["Member doesn't exist"], status: 422
    end
  end

  def create
    @member = Member.new(member_params)

    if @member.save
      login!(@member)
      render 'api/members/show'
    else
      render json: @member.errors.full_messages, status: 422
    end
  end

  private

  def member_params
    params.require(:member).permit(:first_name, :last_name, :email, :zipcode, :password)
  end
end
