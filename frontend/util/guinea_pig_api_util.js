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
    url: `/api/members/${memberId}/guinea_pigs`
  })
);

export const fetchGuineaPig = guineaPigId => (
  $.ajax ({
    method: 'GET',
    url: `/api/guinea_pigs/${guineaPigId}`
  })
);

export const updateGuineaPig = guineaPig => (
  $.ajax ({
    method: 'PATCH',
    url: `/api/guinea_pigs/${guineaPig.id}`,
    data: { guineaPig }
  })
);

export const removeGuineaPig = guineaPigId => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/guinea_pigs/${guineaPigId}`
  })
);