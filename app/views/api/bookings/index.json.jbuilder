@pet_bookings.each do |booking|
  json.set! booking.id do 
    json.extract! booking, :id, :owner_id, :sitter_id, :members_service_id, :start_date, :end_date, :message
  end
end

@job_bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :owner_id, :sitter_id, :members_service_id, :start_date, :end_date, :message
  end
end