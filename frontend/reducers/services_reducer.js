import { RECEIVE_SERVICES, RECEIVE_MEMBERS_SERVICE } from '../actions/service_actions';

const servicesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVICES:
      return Object.assign({}, state, action.services);
    case RECEIVE_MEMBERS_SERVICE:
      return Object.assign({}, state, action.service);
    default: 
      return state;
  }
}

export default servicesReducer;