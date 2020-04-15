import { connect } from 'react-redux';
import { updateGuineaPig, fetchGuineaPigs, removeGuineaPig } from '../../../actions/guinea_pig_actions';
import UpdateYourPiggies from './update_your_piggies';

const mapStateToProps = (state, ownProps) => ({
  currentMember: state.entities.members[state.session.currentMemberId],
  guineaPig: state.entities.guineaPigs[ownProps.match.params.guineaPigId],
  guineaPigs: state.entities.guineaPigs,
  formType: `Edit your Piggy`,
  method: 'PATCH'
});

const mapDispatchToProps = dispatch => ({
  processForm: guineaPig => dispatch(updateGuineaPig(guineaPig)),
  fetchGuineaPigs: memberId => dispatch(fetchGuineaPigs(memberId)),
  removeGuineaPig: guineaPigId => dispatch(removeGuineaPig(guineaPigId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateYourPiggies);