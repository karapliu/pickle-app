import { RECEIVE_CURRENT_MEMBER } from '../actions/session_actions';
import { RECEIVE_MEMBER } from '../actions/member_actions';

const membersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_MEMBER:
    case RECEIVE_MEMBER:
      return Object.assign({}, state, { [action.member.id]: action.member });
    default: 
      return state;
  }
};

export default membersReducer;