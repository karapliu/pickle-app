import { connect } from 'react-redux';
import { fetchMember } from '../../actions/member_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
  member: state.entities.members[ownProps.match.params.memberId]
});

const mapDispatchToProps = dispatch => ({
  fetchMember: memberId => dispatch(fetchMember(memberId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);