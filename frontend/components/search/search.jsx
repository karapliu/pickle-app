import React from 'react';
import SearchItem from './search_item';
import { Link } from 'react-router-dom';
import FilterItem from './filter_item';

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    const { members, currentMemberId } = this.props;

    if (!members) {
      return null;
    }
    
    const allMembers = [];
    let mems = members.slice();
    for (let i = 0; i < mems.length; i++) {
      let mem = mems[i];
      if (mem.id === currentMemberId) {
        mems = mems.slice(0, i).concat(mems.slice(i + 1))
        i = i - 1;
        continue;
      } else {
        allMembers.push(<Link to={`/members/${mem.id}`}><SearchItem key={`mem-${mem.id}`} member={mem} num={i + 1} /></Link>)
      }
    }

    return (
      <div className="search-page-container">
        <div className="search-left">
          <form>
            <div className="search-left-top">
              <label for="services">Service type</label>
              <div className="custom-select">
                <select id="services">
                  <option value="boarding">Guinea Pig Boarding</option>
                  <option value="house-sitting">House Sitting</option>
                  <option value="drop-in">Drop-In Visits</option>
                  <option value="day-care">Guinea Pig Day Care</option>
                  <option value="grooming">Guinea Pig Grooming</option>
                </select>
              </div>

              <label>Service near</label>
              <input type="text" placeholder="Zip Code"/>

              <label>Dates</label>
              <div className="two-input-container">
                <div className="two-input-input">
                  <input type="date" />
                  <div className="i-calendar"><i className="far fa-calendar-alt"></i></div>
                </div>
                <i className="fas fa-long-arrow-alt-right arrow"></i>
                <div className="two-input-input">
                  <input type="date" />
                  <div className="i-calendar"><i className="far fa-calendar-alt"></i></div>
                </div>
              </div>

              <label>Rate?</label>
              <div className="two-input-container">
                <div className="two-input-input">
                  <input type="text" placeholder="Min" />
                </div>
                <i className="fas fa-long-arrow-alt-right arrow"></i>
                <div className="two-input-input">
                  <input type="text" placeholder="Max" />
                </div>
              </div>
            </div>

            <div className="search-left-bottom">
              <div className="flex-row space-between">
                <label>Filters</label>
                <Link to="/search">Reset all</Link>
              </div>

              <label className="filter-title">Housing conditions</label>
              <FilterItem text='Has house (excludes apartments)' />
              <FilterItem text='Has fenced yard' />

              <label className="filter-title">Pets in the home</label>
              <FilterItem text="Doesn't own a guinea pig" />
              <FilterItem text="Doesn't own a pet" />
              <FilterItem text="Accepts only one client at a time" />

              <label className="filter-title">Children in the home</label>
              <FilterItem text='Has no children' />
            </div>
          </form>
        </div>

        <div className="search-middle">
          {allMembers}
        </div>

        <div className="search-right">
          {/* <img src={window.map} /> */}
        </div>
      </div>
    )
  }
}

export default Search;