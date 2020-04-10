export const fetchServices = memberId => (
  $.ajax ({
    method: 'GET',
    url: `/api/members/${memberId}/members_services`
  })
);