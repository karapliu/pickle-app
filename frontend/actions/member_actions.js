import * as MemberAPIUtil from '../util/member_api_util';

export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';

const receiveMember = member => ({
  type: RECEIVE_MEMBER, 
  member
});

export const fetchMember = memberId => dispatch => (
  MemberAPIUtil.fetchMember(memberId) 
    .then(member => dispatch(receiveMember(member)))
);

export const updateMember = member => dispatch => (
  MemberAPIUtil.updateMember(member)
    .then(member => dispatch(receiveMember(member)))
);

