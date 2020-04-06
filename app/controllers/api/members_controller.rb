class Api::MembersController < ApplicationController
  def create
    @member = Member.new(member_params)

    if @member.save
      login!(@member)
      render 'api/members/show'
    else
      rener json: @member.errors.full_messages, status 422
    end
  end

  private

  def member_params
    params.require(:member).permit(:first_name, :last_name, :email, :zipcode, :password)
  end
end
