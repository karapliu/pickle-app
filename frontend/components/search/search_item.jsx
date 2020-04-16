import React from 'react';

const SearchItem = ({ member, num }) => {
  return (
    <div className="search-item">
      <div className="search-img">
        <img src={member.photoUrl === "" ? window.paw : member.photoUrl} />
      </div>
      <h1>{num}. {member.first_name}</h1>
    </div>
  )
}

export default SearchItem;