export const fetchServices = memberId => (
  $.ajax ({
    method: 'GET',
    url: `/api/members/${memberId}/members_services`
  })
);

export const updateMembersService = service => (
  $.ajax ({
    method: 'PATCH',
    url: `/api/members_services/${service.id}`,
    data: { service }
  })
);