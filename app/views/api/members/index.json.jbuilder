@members.each do |member|
  json.set! member.id do 
    json.extract! member, :id, :first_name, :last_name, :zipcode
    json.profilePic member.profile_pic.attached? url_for(member.profile_pic) : ""
  end
end