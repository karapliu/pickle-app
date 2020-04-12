import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    const { currentMember } = this.props;
    const lastInitial = currentMember.last_name.slice(0, 1);
    return (
      <div className="dashboard-container">
        <div className="dashboard-flex">
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
              <div className="balance flex-row-btwn">
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
              <h2>Your Guinea Pigs</h2>
              <p>Add your guinea pigs</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;