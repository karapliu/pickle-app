export const addGuineaPig = guinea_pig => (
  $.ajax ({
    method: 'POST', 
    url: '/api/guinea_pigs',
    data: { guinea_pig }
  })
);

export const fetchGuineaPigs = memberId => (
  $.ajax ({
    method: 'GET',
    url: `api/members/${memberId}/guinea_pigs`
  })
)