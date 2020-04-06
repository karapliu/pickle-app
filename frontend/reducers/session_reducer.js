import { RECEIVE_CURRENT_MEMBER, LOGOUT_CURRENT_MEMBER } from '../actions/session_actions';

const _null = {
  currentMemberId: null
};

const sessionReducer = (state = _null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_MEMBER: 
      return { currentMemberId: action.member.id };
    case LOGOUT_CURRENT_MEMBER:
      return _null;
    default: 
      return state;
  }
};

export default sessionReducer;