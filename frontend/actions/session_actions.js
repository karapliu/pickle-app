import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_MEMBER = 'RECEIVE_CURRENT_MEMBER';
export const LOGOUT_CURRENT_MEMBER = 'LOGOUT_CURRENT_MEMBER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentMember = member => ({
  type: RECEIVE_CURRENT_MEMBER,
  member
});

const logoutCurrentMember = () => ({
  type: LOGOUT_CURRENT_MEMBER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = member => dispatch => (
  APIUtil.signup(member)
    .then(member => dispatch(receiveCurrentMember(member)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = member => dispatch => (
  APIUtil.login(member)
    .then(member => dispatch(receiveCurrentMember(member)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentMember()))
);

