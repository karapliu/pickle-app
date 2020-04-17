import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.removeGPig = this.removeGPig.bind(this);
  }

  componentDidMount() {
    this.props.fetchMembers();
    this.props.fetchGuineaPigs(this.props.currentMember.id);
    this.props.fetchBookings();
  }

  removeGPig(guineaPigId) {
    this.props.removeGuineaPig(guineaPigId)
      .then(() => this.props.history.push('/account'))
  }

  render() {
    const { currentMember, guineaPigs, bookings, members } = this.props;

    if (!currentMember) {
      return null;
    }

    if (!members) {
      return null;
    }

    const allPiggies = currentMember.guinea_pig_ids.map(pigId => {
      const gPig = guineaPigs[pigId];

      if (gPig) {
        if (gPig.photoUrl === "") {
          return <div key={`dg-${pigId}`} className="d-pig bg-green">
            <img src={window.paw} />
            <h2 className="d-pig-name">{gPig.name}</h2>
            <div className="d-pig-links flex-row space-between">
              <Link to={`/account/profile/your-piggies/${pigId}`}><i className="far fa-edit"></i> Edit</Link>
              <Link to={`/account/guinea-pigs/${pigId}`}><i className="far fa-eye"></i> View</Link>
              <button onClick={() => this.removeGPig(pigId)}><i className="far fa-minus-square"></i> Remove</button>
            </div>
          </div>
        } else {
          return <div key={`dg-${pigId}`} className="d-pig">
            <img src={gPig.photoUrl} />
            <h2 className="d-pig-name">{gPig.name}</h2>
            <div className="d-pig-links flex-row space-between">
              <Link to={`/account/profile/your-piggies/${pigId}`}><i className="far fa-edit"></i> Edit</Link>
              <Link to={`/account/guinea-pigs/${pigId}`}><i className="far fa-eye"></i> View</Link>
              <button onClick={() => this.removeGPig(pigId)}><i className="far fa-minus-square"></i> Remove</button>
            </div>
          </div>
        }
      } else {
        return '';
      }
    })

    const lastInitial = currentMember.last_name.slice(0, 1);

    const jobBookings = currentMember.job_booking_ids.map(id => {
      let book = bookings[id];

      if (book) {
        if (members[book.owner_id]) {
          let owner = members[book.owner_id];
          let startDate = new Date(book.start_date);
          let endDate = new Date(book.end_date)
          return (
            <li className="job-book flex-row" key={`job-${id}`}>
              <img src={owner.photoUrl} />
              <div className="flex-column">
                <Link className="booking-name" to={`/members/${owner.id}`}>{owner.first_name}</Link>
                <p>{book.message}</p>
              </div>
              <div className="booking-date">
                {startDate.getMonth()}/{startDate.getDate()} - {endDate.getMonth()}/{endDate.getDate()}
              </div>
            </li>
          )
        } else {
          return "";
        }
      }
    })

    const petBookings = currentMember.pet_booking_ids.map(id => {
      let book = bookings[id];

      if (book) {
        if (members[book.sitter_id]) {
          let sitter = members[book.sitter_id];
          let startDate = new Date(book.start_date);
          let endDate = new Date(book.end_date)
          return (
            <li className="job-book flex-row" key={`job-${id}`}>
              <img src={sitter.photoUrl} />
              <div className="flex-column">
                <Link className="booking-name" to={`/members/${sitter.id}`}>{sitter.first_name}</Link>
                <p>{book.message}</p>
              </div>
              <div className="booking-date">
                {startDate.getMonth()}/{startDate.getDate()} - {endDate.getMonth()}/{endDate.getDate()}
              </div>
            </li>
          )
        } else {
          return "";
        }
      }
    })
    
    return (
      <>
      <div className="dashboard-container">
        <div className="dashboard-content flex-row space-between">
          <div className="dashboard-left">
            <div className="dashboard-box flex-row">
              <div className="profile-box-photo">
                <img src={currentMember.photoUrl} />
              </div>

              <div className="profile-box-info">
                <h3>{currentMember.first_name} {lastInitial}.</h3>
                <Link to="/account/profile/account-info">Edit Profile</Link>
                <Link to={`/members/${currentMember.id}`}>View Profile</Link>
              </div>
            </div>

            <div className="pickle-balance">
              <h3 className="add-30-marg">Pickle Balance</h3>
              <div className="heavy-underline add-30-marg" />
              <div className="balance flex-row space-between">
                <div className="bal">
                  <h5>$0.00</h5>
                  <p>reedeemable</p>
                  <Link to="/account">Withdraw Money</Link>
                </div>

                <div className="bal">
                  <h5>$0.00</h5>
                  <p>total</p>
                  <Link to="/account">Apply Promo Code</Link>
                </div>
              </div>
              <div className="pending">Pending $0.00</div>
            </div>

          </div>

          <div className="dashboard-right">
            <div className="dashboard-box">
              <h2>Upcoming Stays</h2>
              <ul className="job-bookings">{jobBookings}</ul>
            </div>

            <div className="dashboard-box">
              <h2>Upcoming Bookings</h2>
              <ul className="job-bookings">{petBookings}</ul>
            </div>
            <div className="dashboard-box">
              <h2>Your Guinea Pigs</h2>
              <p>Add your guinea pigs or edit their information</p>
              <div className="d-your-piggies">
                {allPiggies}
                <Link to="/account/profile/your-piggies">
                  <div className="d-pig add">
                    <i className="fas fa-plus-circle"></i>
                    Add a piggy
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
      </>
    )
  }
}

export default Dashboard;