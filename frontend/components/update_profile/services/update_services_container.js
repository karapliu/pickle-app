import { connect } from 'react-redux';
import { fetchServices } from '../../../actions/service_actions';
import UpdateServices from './update_services';
import { updateMembersService } from '../../../actions/service_actions';

const mapStateToProps = state => {
  const { members, services } = state.entities;
  const currentMember = members[state.session.currentMemberId];
  const currentMemberServices = currentMember.service_ids.map(id => services[id]);

  return ({
    currentMember,
    services: currentMemberServices
  })
};

const mapDispatchToProps = dispatch => ({
  fetchServices: memberId => dispatch(fetchServices(memberId)),
  updateMembersService: services => dispatch(updateMembersService(services))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateServices);