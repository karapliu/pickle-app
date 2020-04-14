import { RECEIVE_GUINEA_PIG } from '../actions/guinea_pig_actions';

const guineaPigReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GUINEA_PIG:
      return Object.assign({}, state, action.guineaPig);
    default:
      return state
  }
}

export default guineaPigReducer;