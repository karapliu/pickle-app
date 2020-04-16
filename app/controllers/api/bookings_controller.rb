class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    sitter = Member.find(params[:member_id])
    members_service = MembersService.find_by(service_id: params[:service_id], member_id: sitter.id)
    @booking.ms_id = members_service.id
    @booking.owner_id = current_member
    @booking.sitter_id = Member.find(params[:member_id])

    if @booking.save
      render 'api/bookings/show'
    else
      render json: ['Please fill out all fields'], status: 401
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :service_id, :message)
  end
end