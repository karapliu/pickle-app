class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
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
    params.require(:booking).permit(:start_date, :end_date)
  end
end