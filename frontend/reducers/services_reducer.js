import { RECEIVE_SERVICES } from '../actions/service_actions';

const servicesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVICES:
      return Object.assign({}, state, action.services);
    default: 
      return state;
  }
}

export default servicesReducer;