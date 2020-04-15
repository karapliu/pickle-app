import * as MemberAPIUtil from '../util/member_api_util';

export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';
export const RECEIVE_ALL_MEMBERS = 'RECEIVE_ALL_MEMBERS';

const receiveMember = member => ({
  type: RECEIVE_MEMBER, 
  member
});

const receiveAllMembers = members => ({
  type: RECEIVE_ALL_MEMBERS,
  members
})

export const fetchMember = memberId => dispatch => (
  MemberAPIUtil.fetchMember(memberId) 
    .then(member => dispatch(receiveMember(member)))
);

export const updateMember = member => dispatch => (
  MemberAPIUtil.updateMember(member)
    .then(member => dispatch(receiveMember(member)))
);

export const fetchMembers = () => dispatch => (
  MemberAPIUtil.fetchMembers()
    .then(members => dispatch(receiveAllMembers(members)))
);

