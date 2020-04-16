json.extract! @guinea_pig, :id, :name, :sex, :age, :owner_id
json.photoUrl @guinea_pig.photo.attached? ? url_for(@guinea_pig.photo) : ""