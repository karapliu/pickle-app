import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
import { RECEIVE_ERRORS } from './session_actions';

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
});

export const createBooking = booking => dispatch => (
  BookingAPIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const fetchBookings = () => dispatch => (
  BookingAPIUtil.fetchBookings()
    .then(bookings => dispatch(receiveAllBookings(bookings)))
);