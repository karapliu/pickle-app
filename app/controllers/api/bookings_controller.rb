class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    members_service = MembersService.find_by({service_id: booking_params[:members_service_id], member_id: booking_params[:sitter_id]})
    @booking.members_service_id = members_service.id
    @booking.start_date = DateTime.parse(booking_params[:start_date])
    @booking.end_date = DateTime.parse(booking_params[:end_date])

    if @booking.save
      render 'api/bookings/show'
    else
      render json: ['Please fill out all fields'], status: 401
    end
  end

  def index
    @member = Member.find(current_member.id)
    @pet_bookings = @member.pet_bookings
    @job_bookings = @member.job_bookings
    # debugger
    render 'api/bookings/index'
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :members_service_id, :owner_id, :sitter_id, :message)
  end
end