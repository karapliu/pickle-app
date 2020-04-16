import { connect } from 'react-redux';
import ContactForm from './contact_form';
import { createBooking } from '../../actions/booking_actions';
import { fetchMember } from '../../actions/member_actions';
import { fetchServices } from '../../actions/service_actions';


const mapStateToProps = (state, ownProps) => ({
  sitter: state.entities.members[ownProps.match.params.memberId],
  currentMember: state.entities.members[state.session.currentMemberId],
  services: state.entities.services
});

const mapDispatchToProps = dispatch => ({
  processForm: booking => dispatch(createBooking(booking)),
  fetchMember: memberId => dispatch(fetchMember(memberId)),
  fetchServices: memberId => dispatch(fetchServices(memberId)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);