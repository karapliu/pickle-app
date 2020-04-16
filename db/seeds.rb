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
squeegee_pic = open('https://pickle-seeds.s3.amazonaws.com/squeegee.png')
cucumber_pic = open('https://pickle-seeds.s3.amazonaws.com/cucumber.png')
lettuce_pic = open('https://pickle-seeds.s3.amazonaws.com/lettuce.png')
potato_pic = open('https://pickle-seeds.s3.amazonaws.com/potato.png')
norbert_pic = open('https://pickle-seeds.s3.amazonaws.com/norbert.png')


# MEMBERS 
kara = Member.create!({
  first_name: "Kara", 
  last_name: "Liu", 
  email: "karaliu@email.com", 
  zipcode: 10001, 
  password: "karapassword", 
  headline: "Your guinea pig's home away from home :)"
  about_me: "I love guinea pigs! I have a guinea pig named Pickle. She is 4 years old. I promise
   you your guinea pig will have the best time!", 
  hosting_max: 4
})

kara.profile_pic.attach(io: kara_pic, filename: 'kara.jpg')

kendrick = Member.create!({
  first_name: "Kendrick", 
  last_name: "Lamar", 
  email: "kendricklamar@email.com", 
  zipcode: 10010, 
  password: "kendrickpassword", 
  headline: "Guinea pigs 4 life!", 
  about_me: "I've been a guinea pig owner my entire life. They mean the world to me. We truly don't deserve them! 
  My 9 year old guinea pig just passed away in December and I've been pretty devastated, so the idea of being able 
  to give love to other guinea pigs is what inspired this Pickle account.",
  hosting_max: 3
})

kendrick.profile_pic.attach(io: kendrick_pic, filename: 'kendrick.jpg')

niki = Member.create!({
  first_name: "Niki",
  last_name: "Zefanya",
  email: "niki@email.com",
  zipcode: 10015,
  password: "nikipassword",
  headline: "Owner of 9 piggies!"
  about_me: "Recent college grad! Currently work 9-5 at a financial media group, fun, young professional in the city. Highly 
  responsible and will cater to your pet’s needs, great at reading pet language and making sure they are comfortable. 
  A huge priority is cleanliness for me especially being in nyc. Please let me know if there are additional issues or 
  requests for your piggy, I will cater to individual need on a case by case bases.",
  hosting_max: 5
})

niki.profile_pic.attach(io: niki_pic, filename: 'niki.jpg')

asap = Member.create!({
  first_name: "A$AP", 
  last_name: "Rocky", 
  email: "asaprocky@email.com", 
  zipcode: 10012, 
  password: "asappassword", 
  headline: "Guinea pig lover!", 
  about_me: "Hi! I have flexible work hours and am home often to give your pet a lot of love! I have owned guinea pigs my entire life 
  and miss the companionship they bring. The only reason I don’t adopt one of my own is I travel out of town quite a bit. I would love the 
  opportunity to spoil your baby while you’re away! My one bedroom apartment is very cozy. I’m also very happy to send photos and updates regularly 
  to assure your comfort and satisfaction. I am well versed in special needs animals as I had a blind and deaf Great Dane back home!",
  hosting_max: 5
})

asap.profile_pic.attach(io: asap_pic, filename: 'asap.jpeg')

angela = Member.create!({
  first_name: "Angela", 
  last_name: "Liu", 
  email: "angelaliu@email.com", 
  zipcode: 10015, 
  password: "angelapassword", 
  headline: "Guinea pig vacay!", 
  about_me: "Hi! I am Angela! Although I work a full-time job from 10 to 5pm, my office is only a 15-minute walk from where I live , so I’m able 
  to check on pets during my lunch hour. Plus my job is pretty flexible, so I can request to work from home so I can adjust my hours to meet your 
  scheduling needs. I’d love the chance to help people who need to find a reliable and compassionate guinea pig sitter. I’m capable of boarding, 
  house sitting, and guinea pig grooming.",
  hosting_max: 3
})

angela.profile_pic.attach(io: angela_pic, filename: 'ange.png')

mac = Member.create!({
  first_name: "Mac", 
  last_name: "Miller",
  email: "macmiller@email.com",
  zipcode: 10008,
  password: "macpassword",
  headline: "Leave your guinea pig with me and they will have a guaranteed good time!",
  about_me: "I have grown up with all types of pets such as dogs, cats, rabbits, guinea pigs, hamsters, and chinchillas and am definitely a true animal lover. 
  I have experience taking care of all types of animals and since I work from home full time, I am able to give my undivided love and attention to each piggy.", 
  hosting_max: 1
})

mac.profile_pic.attach(io: mac_pic, filename: 'mac.jpg')

frank = Member.create!({
  first_name: "Frank",
  last_name: "Ocean",
  email: "frankocean@email.com",
  zipcode: 10029,
  password: "frankpassword",
  headline: "TLC for your guinea pig!",
  about_me: "I grew up in a household where 4 guinea pigs over the years were part of the family. Guinea pigs are equals to me and I 
  always enjoy spending time with them. Your guinea pig(s) will always be safe with me, as I will probably value their safety and well 
  being more than mine; most guinea pig owners probably feel the same way. I'm looking forward to meeting your guinea pig, I’m sure once they 
  spend time with me, they will look forward to my next visit!",
  hosting_max: 2
})

frank.profile_pic.attach(io: frank_pic, filename: 'frank.jpg')

tyler = Member.create!({
  first_name: "Tyler the",
  last_name: "Creator",
  email: "tylerthecreator@email.com",
  zipcode: 10008,
  password: "tylerpassword",
  headline: "Guinea pig whisperer",
  about_me: "Any questions, I would absolutely love to answer. Would pay special attention to seniors, give additional care to any injuries and/or 
  special requests.",
  hosting_max: 3
})

tyler.profile_pic.attach(io: tyler_pic, filename: 'tyler.jpg')

rini = Member.create!({
  first_name: "Rini",
  last_name: "Sandoval",
  email: "rini@email.com",
  zipcode: 10001, 
  password: "rinipassword",
  headline: "Dependable sitter",
  about_me: "Hi! My rates are for a 24 hour period. I'm pretty flexible about pick up and drop off hours. Regular rates are $40 per night for sitting and $45 
  for boarding. I would love to care for your guinea pig where they will be adored, safe, comfortable, and showered with attention in a comfortable environment.",
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

squeegee.photo.attach(io: squeegee_pic, filename: 'squeegee.png')

cucumber = GuineaPig.create!({
  name: "Cucumber", 
  age: 5, 
  sex: "Male", 
  owner_id: angela.id
})

cucumber.photo.attach(io: cucumber_pic, filename: 'cucumber.png')

lettuce = GuineaPig.create!({
  name: "Lettuce",
  age: 1,
  sex: "Female",
  owner_id: niki.id
})

lettuce.photo.attach(io: lettuce_pic, filename: 'lettuce.png')

potato = GuineaPig.create!({
  name: "Potato",
  age: 8,
  sex: "Male",
  owner_id: tyler.id
})

potato.photo.attach(io: potato_pic, filename: 'potato.png')

norbert = GuineaPig.create!({
  name: "Norbert",
  age: 3,
  sex: "Female",
  owner_id: frank.id
})

norbert.photo.attach(io: norbert_pic, filename: 'norbert.png')

# SERVICES 
boarding = Service.create!({name: "Guinea Pig Boarding"})
house_sitting = Service.create!({name: "House Sitting"})
drop_in_visits = Service.create!({name: "Drop-In Visits"})
day_care = Service.create!({name: "Guinea Pig Day Care"})
grooming = Service.create!({name: "Guinea Pig Grooming"})

# MEMBERS SERVICES
kara_boarding = MembersService.create!({price: 80, member_id: kara.id, service_id: boarding.id})
kara_house_sitting = MembersService.create!({price: 40, member_id: kara.id, service_id: house_sitting.id})
kara_drop_in_visits = MembersService.create!({price: 25, member_id: kara.id, service_id: drop_in_visits.id})
kara_day_care = MembersService.create!({price: 50, member_id: kara.id, service_id: day_care.id})
kara_grooming = MembersService.create!({price: 20, member_id: kara.id, service_id: grooming.id})
kendrick_boarding = MembersService.create!({price: 75, member_id: kendrick.id, service_id: boarding.id})
kendrick_grooming = MembersService.create!({price: 30, member_id: kendrick.id, service_id: grooming.id})
asap_boarding = MembersService.create!({price: 150, member_id: asap.id, service_id: boarding.id})
asap_day_care = MembersService.create!({price: 90, member_id: asap.id, service_id: day_care.id})
asap_grooming = MembersService.create!({price: 70, member_id: asap.id, service_id: grooming.id})
asap_drop_in_visits = MembersService.create!({price: 25, member_id: asap.id, service_id: drop_in_visits.id})
niki_boarding = MembersService.create!({price: 105, member_id: niki.id, service_id: boarding.id})
niki_house_sitting = MembersService.create!({price: 70, member_id: niki.id, service_id: house_sitting.id})
niki_grooming = MembersService.create!({price: 20, member_id: niki.id, service_id: grooming.id})
angela_drop_in_visits = MembersService.create!({price: 25, member_id: angela.id, service_id: drop_in_visits.id})
angela_day_care = MembersService.create!({price: 30, member_id: angela.id, service_id: day_care.id})
angela_grooming = MembersService.create!({price: 40, member_id: angela.id, service_id: grooming.id})
mac_boarding = MembersService.create!({price: 90, member_id: mac.id, service_id: boarding.id})
mac_house_sitting = MembersService.create!({price: 25, member_id: mac.id, service_id: house_sitting.id})
mac_drop_in_visits = MembersService.create!({price: 30, member_id: mac.id, service_id: drop_in_visits.id})
tyler_boarding = MembersService.create!({price: 200, member_id: tyler.id, service_id: boarding.id})
frank_boarding = MembersService.create!({price: 90, member_id: frank.id, service_id: boarding.id})
frank_house_sitting = MembersService.create!({price: 70, member_id: frank.id, service_id: house_sitting.id})
frank_drop_in_visits = MembersService.create!({price: 45, member_id: frank.id, service_id: drop_in_visits.id})
frank_day_care = MembersService.create!({price: 90, member_id: frank.id, service_id: day_care.id})
frank_grooming = MembersService.create!({price: 40, member_id: frank.id, service_id: grooming.id})
rini_boarding = MembersService.create!({price: 70, member_id: rini.id, service_id: boarding.id})
rini_house_sitting = MembersService.create!({price: 40, member_id: rini.id, service_id: house_sitting.id})
rini_drop_in_visits = MembersService.create!({price: 35, member_id: rini.id, service_id: drop_in_visits.id})
rini_grooming = MembersService.create!({price: 10, member_id: rini.id, service_id: grooming.id})


