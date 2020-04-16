export const createBooking = booking => {
  debugger;
  return (
  $.ajax ({
    method: 'POST',
    url: `/api/members/${booking.sitter_id}/bookings`,
    data: { booking }
  })
)}