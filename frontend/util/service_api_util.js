export const fetchServices = memberId => (
  $.ajax ({
    method: 'GET',
    url: `/api/members/${memberId}/members_services`
  })
);

export const updateMembersService = services => (
  $.ajax ({
    method: 'PATCH',
    url: `/api/members_services/update`,
    data: { services }
  })
);

// service { id: , price: ,member_id: , service_id: }