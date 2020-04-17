class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    sitter = Member.find(params[:member_id])
    members_service = MembersService.find_by({service_id: booking_params[:members_service_id], member_id: sitter.id})
    @booking.members_service_id = members_service.id
    @booking.owner_id = current_member.id
    @booking.sitter_id = sitter.id
    @booking.start_date = DateTime.parse(booking_params[:start_date])
    @booking.end_date = DateTime.parse(booking_params[:end_date])
    
    if @booking.save
      render 'api/bookings/show'
    else
      render json: ['Please fill out all fields'], status: 401
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :members_service_id, :message)
  end
end