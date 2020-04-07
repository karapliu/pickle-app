import { RECEIVE_ERRORS, RECEIVE_CURRENT_MEMBER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_MEMBER:
    case CLEAR_ERRORS:
      return [];
    default: 
      return state;
  }
};

export default sessionErrorsReducer;