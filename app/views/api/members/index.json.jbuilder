@members.each do |member|
  json.set! member.id do 
    json.extract! member, :id, :first_name, :last_name, :zipcode, :headline, :m_ids, :guinea_pig_ids, :job_booking_ids, :pet_booking_ids
    json.photoUrl member.profile_pic.attached? ? url_for(member.profile_pic) : ""
  end
end