import { connect } from 'react-redux';
import YourPhoto from './your_photo';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId]
});

export default connect(
  mapStateToProps
)(YourPhoto);