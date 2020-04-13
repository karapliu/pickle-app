import React from 'react';
import UpdateHeader from '../update_header/update_header';

class UpdateServices extends React.Component {
  render() {
    return (
      <UpdateHeader location={location.hash} />
    )
  }
}

export default UpdateServices;