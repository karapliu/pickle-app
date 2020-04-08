json.partial! 'api/members/member', member: @member

if @member.services
  json.services do 
    @services.each do |service| 
      json.set! service.id do 
        json.extract! service, :name
      end
    end
  end

  json.prices do 
    @member.ms.each do |service|
      json.set! service.id do 
        json.extract! service, :price, :service_id
      end
    end
  end
end
  