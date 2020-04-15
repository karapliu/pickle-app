import * as ServiceAPIUtil from '../util/service_api_util';

export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';
export const RECEIVE_MEMBERS_SERVICE = 'RECEIVE_MEMBERS_SERVICE';

const receiveServices = services => ({
  type: RECEIVE_SERVICES,
  services
});

const receiveMembersService = service => ({
  type: RECEIVE_MEMBERS_SERVICE,
  service
})

export const fetchServices = memberId => (dispatch, state) => (
  ServiceAPIUtil.fetchServices(memberId)
    .then(services => {
      dispatch(receiveServices(services));
      return state();
    })
);

export const updateMembersService = services => dispatch => (
  ServiceAPIUtil.updateMembersService(services)
    .then(services => {
      return dispatch(receiveMembersService(services))
    })
);
