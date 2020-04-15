import { connect } from 'react-redux';
import GuineaPig from './guinea_pig';
import { fetchGuineaPig } from '../../actions/guinea_pig_actions';

const mapStateToProps = (state, ownProps) => ({
  guineaPig: state.entities.guineaPigs[ownProps.match.params.guineaPigId]
});

const mapDispatchToProps = dispatch => ({
  fetchGuineaPig: guineaPigId => dispatch(fetchGuineaPig(guineaPigId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuineaPig);