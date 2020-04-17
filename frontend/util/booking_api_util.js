export const createBooking = booking => (
  $.ajax ({
    method: 'POST',
    url: `/api/members/${booking.sitter_id}/bookings`,
    data: { booking }
  })
);

export const fetchBookings = () => (
  $.ajax ({
    method: 'GET', 
    url: '/api/bookings'
  })
);