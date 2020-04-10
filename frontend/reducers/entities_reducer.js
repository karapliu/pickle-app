import { combineReducers } from 'redux';
import membersReducer from './members_reducer';
import servicesReducer from './services_reducer';

const entitiesReducer = combineReducers({
  members: membersReducer,
  services: servicesReducer
});

export default entitiesReducer;