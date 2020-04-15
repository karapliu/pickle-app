import { connect } from 'react-redux';
import { addGuineaPig, fetchGuineaPigs, removeGuineaPig } from '../../../actions/guinea_pig_actions';
import UpdateYourPiggies from './update_your_piggies';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId],
  guineaPigs: state.entities.guineaPigs,
  formType: 'Add a Piggy',
  method: 'POST'
});

const mapDispatchToProps = dispatch => ({
  processform: guineaPig => dispatch(addGuineaPig(guineaPig)),
  fetchGuineaPigs: memberId => dispatch(fetchGuineaPigs(memberId)),
  removeGuineaPig: guineaPigId => dispatch(removeGuineaPig(guineaPigId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateYourPiggies);