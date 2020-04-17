import React from 'react';
import HostingPigs from './hosting-pigs';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchMember(this.props.match.params.memberId);
    this.props.fetchServices(this.props.match.params.memberId);
    this.props.fetchGuineaPigs(this.props.match.params.memberId)
  }

  render() {
    const { member, guineaPigs } = this.props;

    if (!member) {
      return null;
    }

    const lastInitial = this.props.member.last_name.slice(0, 1)
    
    const allServices = member.service_ids.map(service_id => {
      const serv = member.services[service_id];
      if (serv) {
        return <li className="service-li" key={service_id}>
          <h6 className="li-h6">{serv.name}</h6> 
          <p className="li-price">${serv.price}</p>
        </li>
      } else {
        return "";
      }
    })

    const allPiggies = member.guinea_pig_ids.map(pigId => {
      const gPig = guineaPigs[pigId];

      if (gPig) {
        if (gPig.photoUrl === "") {
          return <div className="p-pig bg-green">
            <img src={window.paw} />
            <h2 className="p-pig-name">{gPig.name}</h2>
          </div>
        } else {
          return <div className="p-pig">
            <img src={gPig.photoUrl} />
            <h2 className="p-pig-name">{gPig.name}</h2>
          </div>
        }
      } else {
        return '';
      }
    })

    return (
      <div className="profile">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-photo">
              <img src={member.photoUrl} />
            </div>

            <div className="profile-header-info">
              <h1 className="prof-h1">{member.first_name} {lastInitial}.</h1>
              <h4 className="prof-h4">{member.zipcode}</h4>
              <div className="profile-response">
                <p><i className="far fa-comments"></i> <span className="grey">Response Rate:</span> 100%</p>
                <p><i className="far fa-clock"></i> <span className="grey">Response Time:</span> within an hour</p>
              </div>
              <Link to={`/members/${member.id}/contact`}><button className="contact-button">Contact {member.first_name}</button></Link>
            </div>
          </div>

          <div className="profile-content">
            <div className="prof-left">
              <div className="prof-services">
                <h2 className="prof-h2">Services</h2>
                  {allServices}
              </div>

              <div className="hosting-pref">
                <h3 className="prof-h3">Hosting Max</h3>
                <HostingPigs max={member.hosting_max} />
                <p>{member.first_name} can host {member.hosting_max} guinea pigs at a time!</p>
              </div>

              {/* <div className="availability">
                <h3 className="prof-h3">Availability</h3>
                <div className="calendar">

                </div>
              </div> */}
            </div>
            <div className="prof-middle">
              <div className="about-me">
                <h3 className="prof-h3">About {member.first_name}</h3>
                <h2 className="prof-headline">{member.headline}</h2>
                <p>{member.about_me}</p>
              </div>

              <h3 className="prof-h3">{member.first_name}'s Piggies</h3>
              <div className="d-your-piggies">{allPiggies}</div>
            </div>
            <div className="prof-right">
              <div className="right-box">
                <div className="right-box-icon"><i className="fas fa-images"></i></div>
                <h4>100%</h4>
                <p>of clients received photo updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;