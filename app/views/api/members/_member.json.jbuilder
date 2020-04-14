json.extract! member, :id, :first_name, :last_name, :email, :zipcode, :about_me, :hosting_max, :service_ids, :guinea_pig_ids
json.photoUrl member.profile_pic.attached? ? url_for(member.profile_pic) : ""
json.photoUrls member.photos.map { |file| url_for(file) }

json.services do 
  member.ms.each do |members_service|
    json.set! members_service.service_id do 
      json.id members_service.service_id
      json.name members_service.service.name
      json.price members_service.price
    end
  end
end
