import React from 'react';
import SearchItem from './search_item';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    const { members } = this.props;

    if (!members) {
      return null;
    }
    
    const allMembers = [];

    for (let i = 0; i < members.length; i++) {
      let mem = members[i];
      allMembers.push(<Link to={`/members/${mem.id}`}><SearchItem key={`mem-${mem.id}`} member={mem} num={i + 1} /></Link>)
    }

    // const membersLis = members.map(member => (
    //   <SearchItem key={`mem-${member.id}`} member={member} />
    //   // <li key={`mem-${member.i}`}>{member.first_name}</li>
    // ))

    return (
      <div className="search-page-container">
        <div className="search-left">

        </div>

        <div className="search-middle">
          {allMembers}
        </div>

        <div className="search-right">

        </div>
      </div>
    )
  }
}

export default Search;