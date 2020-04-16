# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

MembersService.destroy_all
Service.destroy_all
GuineaPig.destroy_all
Member.destroy_all

# SEED FILES
kara_pic = open('https://pickle-seeds.s3.amazonaws.com/kara.jpg')
angela_pic = open('https://pickle-seeds.s3.amazonaws.com/ange.png')
asap_pic = open('https://pickle-seeds.s3.amazonaws.com/asap.jpeg')
frank_pic = open('https://pickle-seeds.s3.amazonaws.com/frank.jpg')
kendrick_pic = open('https://pickle-seeds.s3.amazonaws.com/kendrick.jpg')
mac_pic = open('https://pickle-seeds.s3.amazonaws.com/mac.jpg')
niki_pic = open('https://pickle-seeds.s3.amazonaws.com/niki.jpg')
rini_pic = open('https://pickle-seeds.s3.amazonaws.com/rini.jpg')
tyler_pic = open('https://pickle-seeds.s3.amazonaws.com/tyler.jpg')
pickle_pic = open('https://pickle-seeds.s3.amazonaws.com/pickle.JPG')

# MEMBERS 
kara = Member.create!({
  first_name: "Kara", 
  last_name: "Liu", 
  email: "karaliu@email.com", 
  zipcode: 10001, 
  password: "karapassword", 
  about_me: "I love guinea pigs!", 
  hosting_max: 4
})

kara.profile_pic.attach(io: kara_pic, filename: 'kara.jpg')

kendrick = Member.create!({
  first_name: "Kendrick", 
  last_name: "Lamar", 
  email: "kendricklamar@email.com", 
  zipcode: 10010, 
  password: "kendrickpassword", 
  about_me: "Guinea pigs 4 life!", 
  hosting_max: 3
})

kendrick.profile_pic.attach(io: kendrick_pic, filename: 'kendrick.jpg')

niki = Member.create!({
  first_name: "Niki",
  last_name: "Zefanya",
  email: "niki@email.com",
  zipcode: 10015,
  password: "nikipassword",
  about_me: "I have 9 guinea pigs, but will love to take care of MORE!",
  hosting_max: 5
})

niki.profile_pic.attach(io: niki_pic, filename: 'niki.jpg')

asap = Member.create!({
  first_name: "A$AP", 
  last_name: "Rocky", 
  email: "asaprocky@email.com", 
  zipcode: 10012, 
  password: "asappassword", 
  about_me: "I own five guinea pigs!", 
  hosting_max: 5
})
asap.profile_pic.attach(io: asap_pic, filename: 'asap.jpeg')

angela = Member.create!({
  first_name: "Angela", 
  last_name: "Liu", 
  email: "angelaliu@email.com", 
  zipcode: 10015, 
  password: "angelapassword", 
  about_me: "My sister has a guinea pig named Pickle, and mine is called Cucumber!", 
  hosting_max: 3
})

angela.profile_pic.attach(io: angela_pic, filename: 'ange.png')

mac = Member.create!({
  first_name: "Mac", 
  last_name: "Miller",
  email: "macmiller@email.com",
  zipcode: 10008,
  password: "macpassword",
  about_me: "Leave your guinea pig with me and they will have a guaranteed good time!",
  hosting_max: 1
})

mac.profile_pic.attach(io: mac_pic, filename: 'mac.jpg')

frank = Member.create!({
  first_name: "Frank",
  last_name: "Ocean",
  email: "frankocean@email.com",
  zipcode: 10029,
  password: "frankpassword",
  about_me: "I live near a park and will bring your guinea pig on walks!",
  hosting_max: 2
})

frank.profile_pic.attach(io: frank_pic, filename: 'frank.jpg')

tyler = Member.create!({
  first_name: "Tyler the",
  last_name: "Creator",
  email: "tylerthecreator@email.com",
  zipcode: 10008,
  password: "tylerpassword",
  about_me: "Nice",
  hosting_max: 3
})

tyler.profile_pic.attach(io: tyler_pic, filename: 'tyler.jpg')

rini = Member.create!({
  first_name: "Rini",
  last_name: "Sandoval",
  email: "rini@email.com",
  zipcode: 10001, 
  password: "rinipassword",
  about_me: "I will love your guinea pig as if it was my own!",
  hosting_max: 4
})

rini.profile_pic.attach(io: rini_pic, filename: 'rini.jpg')

# GUINEA PIGS

pickle = GuineaPig.create!({
  name: "Pickle", 
  age: 4, 
  sex: "Female", 
  owner_id: kara.id
})

pickle.photo.attach(io: pickle_pic, filename: 'pickle.JPG')

squeegee = GuineaPig.create!({
  name: "Squeegee", 
  age: 3, 
  sex: "Male", 
  owner_id: kendrick.id
})

cucumber = GuineaPig.create!({
  name: "Cucumber", 
  age: 5, 
  sex: "Male", 
  owner_id: angela.id
})

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