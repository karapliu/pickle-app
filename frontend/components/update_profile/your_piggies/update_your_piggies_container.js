import { connect } from 'react-redux';
import { addGuineaPig, fetchGuineaPigs } from '../../../actions/guinea_pig_actions';
import UpdateYourPiggies from './update_your_piggies';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId],
  guineaPigs: state.entities.guineaPigs
});

const mapDispatchToProps = dispatch => ({
  addGuineaPig: guineaPig => dispatch(addGuineaPig(guineaPig)),
  fetchGuineaPigs: memberId => dispatch(fetchGuineaPigs(memberId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateYourPiggies);