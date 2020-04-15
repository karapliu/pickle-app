# json.services do 
#     # @member.ms.each do |ms|
#     #   json.id service.id
#     #   json.name service.name
#     #   json.price ms.price
#     # end

    
# end

  @member.ms.each do |members_service|
    json.set! members_service.service_id do 
      json.id members_service.service_id
      json.msId members_service.id
      json.name members_service.service.name
      json.price members_service.price
    end
  end
