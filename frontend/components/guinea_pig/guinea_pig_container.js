import { connect } from 'react-redux';
import GuineaPig from './guinea_pig';
import { fetchGuineaPig, removeGuineaPig } from '../../actions/guinea_pig_actions';

const mapStateToProps = (state, ownProps) => ({
  guineaPig: state.entities.guineaPigs[ownProps.match.params.guineaPigId]
});

const mapDispatchToProps = dispatch => ({
  fetchGuineaPig: guineaPigId => dispatch(fetchGuineaPig(guineaPigId)),
  removeGuineaPig: guineaPigId => dispatch(removeGuineaPig(guineaPigId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuineaPig);