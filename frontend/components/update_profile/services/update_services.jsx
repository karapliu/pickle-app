import React from 'react';
import UpdateHeader from '../update_header/update_header';

class UpdateServices extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServices(this.props.currentMember.id)
  }

  render() {
    const { currentMember, services } = this.props;

    if (!services) {
      return null
    }

    const allServices = currentMember.service_ids.map(service_id => {
      // const serv = typeof services[0] == undefined ? services[0][service_id] : null ;
      const serv = currentMember.services[service_id];
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
      <>
      <UpdateHeader location={location.hash} />
      <div className="update-container">
        <div className="update-form-content">
          <h3>Which services would you like to offer?</h3>
          <p className="center grey">Set services to active that you want to appear in search and receive business for.</p>
          <div className="service-box">
            <div className="service-circle">
              <i className="fas fa-suitcase"></i>
            </div>
            <div className="flex-row">
              <h6>Guinea Pig Boarding</h6>
              <p className="tag">Highest Earners</p>
            </div>
            <p className="grey">Your client's guinea pigs come to your home and stay overnight.</p>
            <li className="checklist"><i className="fas fa-check check"></i>&nbsp;&nbsp;Earn up to 2x more</li>
            <li className="checklist"><i className="fas fa-check check"></i>&nbsp;&nbsp;Get your first booking sooner</li>
            <li className="checklist"><i className="fas fa-check check"></i>&nbsp;&nbsp;Make more money on the weekens (Thu-Sun)</li>
          </div>

          <div className="service-box">
            <div className="service-circle">
              <i className="fas fa-home"></i>
            </div>
            <h6>House Sitting</h6>
            <p className="grey">You go to your client's home and stay overnight, taking care of their dogs and home.</p>
          </div>

          <div className="service-box">
            <div className="service-circle">
              <i className="fas fa-carrot"></i>
            </div>
            <h6>Drop-In Visits</h6>
            <p className="grey">Your clients ask you to do home visits to feed and play with their guinea pigs.</p>
          </div>

          <div className="service-box">
            <div className="service-circle">
              <i className="fas fa-sun"></i>
            </div>
            <h6>Guinea Pig Day Care</h6>
            <p className="grey">Your client's guinea pigs stay at your home during the day, Drop offs are around 7-9am, and pick ups are around 4-6pm.</p>
          </div>

          <div className="service-box">
            <div className="service-circle">
                <img src={window.paw} />
            </div>
            <h6>Guinea Pig Grooming</h6>
            <p className="grey">You client drops off their guinea pig for grooming.</p>
          </div>

          <div className="clearfix" />
        </div>
      </div>
      </>
    )
  }
}

export default UpdateServices;