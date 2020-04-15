import React from 'react';

class GuineaPig extends React.Component {
  componentDidMount() {
    this.props.fetchGuineaPig(this.props.match.params.guineaPigId);
  }

  render() {
    const { guineaPig } = this.props;
    
    if (!guineaPig) {
      return null;
    }
    
    return (
      <div className="guinea-pig-container">
        <h1>{guineaPig.name}</h1>
        <p>help</p>
        <p>{guineaPig.age} {guineaPig.sex}</p>
      </div>
    )
  }
}

export default GuineaPig;