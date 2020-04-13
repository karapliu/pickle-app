import React from 'react';
import { Link } from 'react-router-dom';

const UpdateHeaderLink = ({ location, path, name }) => {
  return (
    <Link className={location === path ? 'active' : ''} to={path}>{name}</Link>
  )
}

export default UpdateHeaderLink;