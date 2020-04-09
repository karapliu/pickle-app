json.services do 
  @services.each do |service|
    @member.ms.each do |ms|
      json.id service.id
      json.name service.name
      json.price ms.price
    end
  end
end
