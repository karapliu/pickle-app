import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId]
});

export default connect(
  mapStateToProps
)(Dashboard);