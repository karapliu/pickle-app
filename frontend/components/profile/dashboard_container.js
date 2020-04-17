import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchGuineaPigs, removeGuineaPig } from '../../actions/guinea_pig_actions';
import { fetchBookings } from '../../actions/booking_actions';
import { fetchMembers } from '../../actions/member_actions';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId],
  members: state.entities.members,
  guineaPigs: state.entities.guineaPigs,
  bookings: state.entities.bookings
});

const mapDispatchToProps = dispatch => ({
  fetchGuineaPigs: memberId => dispatch(fetchGuineaPigs(memberId)),
  removeGuineaPig: guineaPigId => dispatch(removeGuineaPig(guineaPigId)),
  fetchBookings: () => dispatch(fetchBookings()),
  fetchMembers: () => dispatch(fetchMembers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);