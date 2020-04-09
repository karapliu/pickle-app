# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Member.destroy_all
Service.destroy_all
MembersService.destroy_all

demo = Member.create!({first_name: "Demo", last_name: "Login", email: "demouser@demo.com", zipcode: 10001, password: "password!", about_me: "I love gpigs!", hosting_max: 5})
kara = Member.create!({first_name: "Kara", last_name: "Liu", email: "karaliu@gmail.com", zipcode: 10001, password: "wootwoot!", about_me: "Yay!", hosting_max: 4})
service = Service.create!({name: "Guinea Pig Boarding"})
service_2 = Service.create!({name: "Guinea Pig Grooming"})
ms = MembersService.create!({price: 30, member_id: demo.id, service_id: service.id})
ms2 = MembersService.create!({price: 20, member_id: kara.id, service_id: service_2.id})
ms3 = MembersService.create!({price: 10, member_id: kara.id, service_id: service.id})