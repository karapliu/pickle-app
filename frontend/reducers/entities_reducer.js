import { combineReducers } from 'redux';
import membersReducer from './members_reducer';
import servicesReducer from './services_reducer';
import guineaPigReducer from './guinea_pig_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  members: membersReducer,
  services: servicesReducer,
  guineaPigs: guineaPigReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;