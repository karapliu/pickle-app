import React from 'react';
import { Link } from 'react-router-dom';

class GuineaPig extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.props.fetchGuineaPig(this.props.match.params.guineaPigId);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeGuineaPig(this.props.guineaPig.id)
      .then(() => this.props.history.push('/account'));
  }

  render() {
    const { guineaPig } = this.props;
    
    if (!guineaPig) {
      return null;
    }
    
    return (
      <div className="guinea-pig-view-content">
        <div className="guinea-pig-view-links">
          <Link to={`/account/profile/your-piggies/${guineaPig.id}`} title="Edit"><i className="far fa-edit"></i></Link>
          <button onClick={this.handleRemove} title="Remove"><i className="far fa-minus-square"></i></button>
          <Link to='/account' title="Go Back"><i className="fas fa-caret-square-left"></i></Link>
        </div>
        <div className="guinea-pig-container">
          <h1>{guineaPig.name}</h1>
          <div className="guinea-pig-photo">
            <img src={guineaPig.photoUrl === "" ? window.paw : guineaPig.photoUrl} className={guineaPig.photoUrl === "" ? 'bg-green' : ''}/>
          </div>
          <div className="guinea-pig-info flex-row space-around">
            <div className="flex-row"><h5>Age: </h5><p>{guineaPig.age}</p></div>
            <div className="flex-row"><h5>Sex: </h5><p>{guineaPig.sex}</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default GuineaPig;