import { connect } from 'react-redux';
import { fetchServices } from '../../../actions/service_actions';
import UpdateServices from './update_services';
import { updateMembersService } from '../../../actions/service_actions';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId],
  services: Object.values(state.entities.services)
});

const mapDispatchToProps = dispatch => ({
  fetchServices: memberId => dispatch(fetchServices(memberId)),
  updateMembersService: service => dispatch(updateMembersService(service))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateServices);