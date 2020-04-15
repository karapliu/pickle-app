import { RECEIVE_GUINEA_PIG, RECEIVE_ALL_GUINEA_PIGS, REMOVE_SINGLE_GUINEA_PIG } from '../actions/guinea_pig_actions';

const guineaPigReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GUINEA_PIG:
      return Object.assign({}, state, action.guineaPig);
    case RECEIVE_ALL_GUINEA_PIGS:
      return action.guineaPigs;
    case REMOVE_SINGLE_GUINEA_PIG:
      let newState = Object.assign({}, state);
      delete newState[action.guineaPigId];
      return newState;
    default:
      return state
  }
}

export default guineaPigReducer;