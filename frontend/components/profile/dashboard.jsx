import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.removeGPig = this.removeGPig.bind(this);
  }

  componentDidMount() {
    this.props.fetchGuineaPigs(this.props.currentMember.id);
  }

  removeGPig(guineaPigId) {
    this.props.removeGuineaPig(guineaPigId)
      .then(() => this.props.history.push('/account'))
  }

  render() {
    const { currentMember, guineaPigs } = this.props;
    const allPiggies = currentMember.guinea_pig_ids.map(pigId => {
      const gPig = guineaPigs[pigId];

      if (gPig) {
        if (gPig.photoUrl === "") {
          return <div className="d-pig bg-green">
            <img src={window.paw} />
            <h2 className="d-pig-name">{gPig.name}</h2>
            <div className="d-pig-links flex-row space-between">
              <Link to={`/account/profile/your-piggies/${pigId}`}><i className="far fa-edit"></i> Edit</Link>
              <Link to={`/account/guinea-pigs/${pigId}`}><i className="far fa-eye"></i> View</Link>
              <button onClick={() => this.removeGPig(pigId)}><i className="far fa-minus-square"></i> Remove</button>
            </div>
          </div>
        } else {
          return <div className="d-pig">
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