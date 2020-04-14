import { connect } from 'react-redux';

import EditGuineaPig from './edit_guinea_pig';

const mapStateToProps = (state, ownProps) => ({
  guineaPig: state.entitites.guineaPigs[ownProps.match.params.guineaPigId]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGuineaPig);