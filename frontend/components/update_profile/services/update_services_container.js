import { connect } from 'react-redux';
import { fetchServices } from '../../../actions/service_actions';
import UpdateServices from './update_services';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId],
  services: Object.values(state.entities.services)
});

const mapDispatchToProps = dispatch => ({
  fetchServices: memberId => dispatch(fetchServices(memberId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateServices);