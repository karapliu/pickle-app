import { RECEIVE_BOOKING, RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions';

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKING: 
      return Object.assign({}, state, { [action.booking.id]: action.booking });
    case RECEIVE_ALL_BOOKINGS: 
      return action.bookings;
    default: 
      return state;
  }
}

export default bookingReducer;