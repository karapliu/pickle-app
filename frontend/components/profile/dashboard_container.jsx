import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchGuineaPigs } from '../../actions/guinea_pig_actions';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId],
  guineaPigs: state.entities.guineaPigs
});

const mapDispatchToProps = dispatch => ({
  fetchGuineaPigs: memberId => dispatch(fetchGuineaPigs(memberId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);