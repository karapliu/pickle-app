import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SignInForm from './signin_form';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);