export const addGuineaPig = guinea_pig => (
  $.ajax ({
    method: 'POST', 
    url: '/api/guinea_pigs',
    data: { guinea_pig }
  })
);