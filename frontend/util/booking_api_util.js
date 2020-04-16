export const createBooking = booking => (
  $.ajax ({
    method: 'POST',
    url: `/api/members/${booking.memberId}/bookings`,
    data: { booking }
  })
)