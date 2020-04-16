import React from 'react';

const SearchItem = ({ member, num }) => {
  return (
    <div className="search-item">
      <div className="search-img">
        <img className={member.photoUrl === "" ? 'bg-green' : ''} src={member.photoUrl === "" ? window.paw : member.photoUrl} />
      </div>
      <h1>{num}. <span className="search-item-name">{member.first_name}</span></h1>
    </div>
  )
}

export default SearchItem;