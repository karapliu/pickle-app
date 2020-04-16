import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
import { RECEIVE_ERRORS } from './session_actions';

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
});

export const createBooking = booking => dispatch => (
  BookingAPIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
);