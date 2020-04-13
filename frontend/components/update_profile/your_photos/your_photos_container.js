import { connect } from 'react-redux';
import YourPhotos from './your_photos';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId]
});

export default connect(
  mapStateToProps
)(YourPhotos);