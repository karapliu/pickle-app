import { connect } from 'react-redux';
import Details from './details';
import { updateMember } from '../../../actions/member_actions';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId]
});

const mapDispatchToProps = dispatch => ({
  processForm: member => dispatch(updateMember(member))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
