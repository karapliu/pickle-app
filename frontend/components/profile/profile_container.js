import { connect } from 'react-redux';
import { fetchMember } from '../../actions/member_actions';
import { fetchServices } from '../../actions/service_actions';
import Profile from './profile';
import { selectAllServices } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  member: state.entities.members[ownProps.match.params.memberId],
  services: selectAllServices(state)
});

const mapDispatchToProps = dispatch => ({
  fetchMember: memberId => dispatch(fetchMember(memberId)),
  fetchServices: memberId => dispatch(fetchServices(memberId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);