# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

MembersService.destroy_all
Service.destroy_all
GuineaPig.destroy_all
Member.destroy_all

# MEMBERS 
kara = Member.create!({first_name: "Kara", last_name: "Liu", email: "karaliu@email.com", zipcode: 10001, password: "karapassword", about_me: "I love guinea pigs!", hosting_max: 4})
kendrick = Member.create!({first_name: "Kendrick", last_name: "Lamar", email: "kendricklamar@email.com", zipcode: 10010, password: "kendrickpassword", about_me: "Guinea pigs 4 life!", hosting_max: 3})
asap = Member.create!({first_name: "A$AP", last_name: "Rocky", email: "asaprocky@email.com", zipcode: 10012, password: "asappassword", about_me: "I own five guinea pigs!", hosting_max: 5})

pickle = GuineaPig.create!({name: "Pickle", age: 4, sex: 'Female', owner_id: kara.id})
squeegee = GuineaPig.create!({name: "Squeegee", age: 3, sex: 'Male', owner_id: kendrick.id})

# SERVICES 
boarding = Service.create!({name: "Guinea Pig Boarding"})
house_sitting = Service.create!({name: "House Sitting"})
drop_in_visits = Service.create!({name: "Drop-In Visits"})
day_care = Service.create!({name: "Guinea Pig Day Care"})
grooming = Service.create!({name: "Guinea Pig Grooming"})

# MEMBERS SERVICES
kara_boarding = MembersService.create!({price: 80, member_id: kara.id, service_id: boarding.id})
kara_day_care = MembersService.create!({price: 50, member_id: kara.id, service_id: day_care.id})
kara_grooming = MembersService.create!({price: 20, member_id: kara.id, service_id: grooming.id})
kendrick_boarding = MembersService.create!({price: 75, member_id: kendrick.id, service_id: boarding.id})
kendrick_day_care = MembersService.create!({price: 20, member_id: kendrick.id, service_id: day_care.id})
kendrick_grooming = MembersService.create!({price: 30, member_id: kendrick.id, service_id: grooming.id})
asap_boarding = MembersService.create!({price: 150, member_id: asap.id, service_id: boarding.id})
asap_day_care = MembersService.create!({price: 90, member_id: asap.id, service_id: day_care.id})
asap_grooming = MembersService.create!({price: 70, member_id: asap.id, service_id: grooming.id})