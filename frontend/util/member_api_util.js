export const fetchMember = memberId => (
  $.ajax ({
    method: 'GET',
    url: `api/members/${memberId}`
  })
);