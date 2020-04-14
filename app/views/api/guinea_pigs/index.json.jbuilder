@guinea_pigs.each do |guinea_pig|
  json.set! guinea_pig.id do 
    json.extract! guinea_pig, :id, :name, :age, :sex
    json.photoUrl guinea_pig.photo.attached? ? url_for(guinea_pig.photo) : ""
  end
end