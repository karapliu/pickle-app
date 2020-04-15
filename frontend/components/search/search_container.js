import { connect } from 'react-redux';
import Search from './search';
import { fetchMembers } from '../../actions/member_actions';

const mapStateToProps = state => ({
  members: state.entities.members
});

const mapDispatchToProps = dispatch => ({
  fetchMembers: () => dispatch(fetchMembers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);