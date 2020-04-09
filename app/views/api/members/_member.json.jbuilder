json.extract! member, :id, :first_name, :last_name, :email, :zipcode, :about_me, :hosting_max
json.photoUrl member.profile_pic.attached? ? url_for(member.profile_pic) : ""