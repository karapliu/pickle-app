import { connect } from 'react-redux';
import ContactForm from './contact_form';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => ({
  sitter: state.entities.members[ownProps.match.params.memberId],
  currentMember: state.entities.members[state.session.currentMemberId]
});

const mapDispatchToProps = dispatch => ({
  processForm: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);