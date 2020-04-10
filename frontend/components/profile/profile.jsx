import React from 'react';
import HostingPigs from './hosting-pigs';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchMember(this.props.match.params.memberId)
    this.props.fetchServices(this.props.match.params.memberId)
  }

  render() {
    const { member } = this.props;

    if (!member) {
      return null;
    }

    const lastInitial = this.props.member.last_name.slice(0, 1)
    
    const allServices = member.service_ids.map(service_id => {
      // const serv = typeof services[0] == undefined ? services[0][service_id] : null ;
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
              <button className="contact-button">Contact {member.first_name}</button>
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
                <div className="hosting-pigs">
                  <HostingPigs max={member.hosting_max} />
                </div>
              </div>

              <div className="availability">
                <h3 className="prof-h3">Availability</h3>
              </div>
            </div>
            <div className="prof-middle"></div>
            <div className="prof-right"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;