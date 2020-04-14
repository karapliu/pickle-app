import { connect } from 'react-redux';
import { addGuineaPig } from '../../../actions/guinea_pig_actions';
import UpdateYourPiggies from './update_your_piggies';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId]
});

const mapDispatchToProps = dispatch => ({
  addGuineaPig: guineaPig => dispatch(addGuineaPig(guineaPig))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateYourPiggies);