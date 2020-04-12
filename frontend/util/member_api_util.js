export const fetchMember = memberId => (
  $.ajax ({
    method: 'GET',
    url: `api/members/${memberId}`
  })
);

export const updateMember = member => (
  $.ajax({
    method: 'PATCH',
    url: `api/members/${member.id}`,
    data: { member }
  })
);