import * as ServiceAPIUtil from '../util/service_api_util';

export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';

const receiveServices = services => ({
  type: RECEIVE_SERVICES,
  services
});

export const fetchServices = memberId => dispatch => (
  ServiceAPIUtil.fetchServices(memberId)
    .then(services => dispatch(receiveServices(services)))
);
