import * as GuineaPigAPIUtil from '../util/guinea_pig_api_util';

export const RECEIVE_GUINEA_PIG = 'RECEIVE_GUINEA_PIG';
export const RECEIVE_ALL_GUINEA_PIGS = 'RECEIVE_ALL_GUINEA_PIGS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveGuineaPig = guineaPig => ({
  type: RECEIVE_GUINEA_PIG,
  guineaPig
});

const receiveAllGuineaPigs = guineaPigs => ({
  type: RECEIVE_ALL_GUINEA_PIGS,
  guineaPigs
})

// const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors: errors.responseJSON
// });

export const addGuineaPig = guineaPig => dispatch => (
  GuineaPigAPIUtil.addGuineaPig(guineaPig)
    .then(guineaPig => dispatch(receiveGuineaPig(guineaPig)))
    // err => dispatch(receiveErrors(err)))
);

export const fetchGuineaPigs = memberId => dispatch => (
  GuineaPigAPIUtil.fetchGuineaPigs(memberId)
    .then(guineaPigs => dispatch(receiveAllGuineaPigs(guineaPigs)))
);