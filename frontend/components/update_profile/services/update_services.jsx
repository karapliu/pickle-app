import React from 'react';
import UpdateHeader from '../update_header/update_header';

class UpdateServices extends React.Component {
  constructor(props) {
    super(props);
    // let allServices = {}
    // this.props.currentMember.service_ids.map(service_id => {
    //   const serv = this.props.currentMember.services[service_id];
    //   allServices[serv.name] = {
    //     id: serv.id,
    //     price: serv.price
    //   }
    // });

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchServices(this.props.currentMember.id)
      .then(state => {
        const { services } = state.entities;
        let allServices = {};
        Object.values(services).forEach(service => {
          allServices[service.name] = {  
            id: service.id,
            price: service.price,
            msId: service.msId
          }
        });

        this.setState(allServices);
      });
  }

  update(field) {
    return e => this.setState({ [field]: {id: this.state[field]['id'], price: parseInt(e.currentTarget.value), msId: this.state[field]['msId']} })
  }

  handleSubmit(e) {
    e.preventDefault();

    
    this.props.updateMembersService(Object.assign({}, this.state))
      .then(() => this.props.history.push('/account/profile/details'));

  //   Object.keys(this.state).map(service => {
  //     let membersService = {
  //       member_id: this.props.currentMember.id,
  //       service_id: this.props.services[0][service]
  //     }
  //   })
  //   const membersService = {
  //     member_id: this.props.currentMember.id,
  //     service_id: 
  //   }
  }

  // make array of values to send to server as a collection

  render() {
    const { currentMember, services } = this.props;

    if (!services) {
      return null;
    }

    return (
      <>
      <UpdateHeader location={location.hash} />
      <div className="update-container">
        <div className="update-form-content">
          <h3>Which services would you like to offer?</h3>
          <p className="center grey">Set services to active that you want to appear in search and receive business for.</p>
          <form className="flex-column jus-center" onSubmit={this.handleSubmit}>
            <div className="service-box">
              <div className="service-circle">
                <i className="fas fa-suitcase"></i>
              </div>
              <div className="switch-pos">
                <label className="active-switch">
                  <input type="checkbox" checked={this.state['Guinea Pig Boarding'] ? true : false}/>
                  <span className="slider" />
                </label>
              </div>
              <div className="flex-row">
                <h6>Guinea Pig Boarding</h6>
                <p className="tag">Highest Earners</p>
              </div>
              <p className="grey">Your client's guinea pigs come to your home and stay overnight.</p>
              <li className="checklist"><i className="fas fa-check med-green"></i>&nbsp;&nbsp;Earn up to 2x more</li>
              <li className="checklist"><i className="fas fa-check med-green"></i>&nbsp;&nbsp;Get your first booking sooner</li>
              <li className="checklist"><i className="fas fa-check med-green"></i>&nbsp;&nbsp;Make more money on the weekends (Thu-Sun)</li>
            </div>
            <div className="service-price">
              <p className="grey">What do you want clients to pay per guinea pig per night?</p>
              <div className="price-input-pos">
                <div className="dollar">$</div>
                <input 
                  value={this.state['Guinea Pig Boarding'] ? this.state['Guinea Pig Boarding']['price'] : ''}
                  className="price" 
                  type="number" 
                  placeholder='30'
                  onChange={this.update('Guinea Pig Boarding')}/>
              </div>
            </div>

            <div className="service-box">
              <div className="service-circle">
                <i className="fas fa-home"></i>
              </div>
              <div className="switch-pos">
                <label className="active-switch">
                  <input type="checkbox" checked={this.state['House Sitting'] ? true : false}/>
                  <span className="slider" />
                </label>
              </div>
              <h6>House Sitting</h6>
              <p className="grey">You go to your client's home and stay overnight, taking care of their dogs and home.</p>
            </div>
            <div className="service-price">
              <p className="grey">What do you want clients to pay per guinea pig per night?</p>
              <div className="price-input-pos">
                <div className="dollar">$</div>
                <input 
                  value={this.state['House Sitting'] ? this.state['House Sitting']['price'] : ''}
                  className="price" 
                  type="number" 
                  placeholder='30'
                  onChange={this.update('House Sitting')}/>
              </div>
            </div>

            <div className="service-box">
              <div className="service-circle">
                <i className="fas fa-carrot"></i>
              </div>
              <div className="switch-pos">
                <label className="active-switch">
                  <input type="checkbox" checked={this.state['Drop-In Visits'] ? true : false}/>
                  <span className="slider" />
                </label>
              </div>
              <h6>Drop-In Visits</h6>
              <p className="grey">Your clients ask you to do home visits to feed and play with their guinea pigs.</p>
            </div>
            <div className="service-price">
              <p className="grey">What do you want clients to pay per guinea pig per visit?</p>
              <div className="price-input-pos">
                <div className="dollar">$</div>
                <input 
                  value={this.state['Drop-In Visits'] ? this.state['Drop-In Visits']['price'] : ''}
                  className="price" 
                  type="number" 
                  placeholder='30'
                  onChange={this.update('Drop-In Visits')}/>
              </div>
            </div>

            <div className="service-box">
              <div className="service-circle">
                <i className="fas fa-sun"></i>
              </div>
              <div className="switch-pos">
                <label className="active-switch">
                  <input type="checkbox" checked={this.state['Guinea Pig Day Care'] ? true : false}/>
                  <span className="slider" />
                </label>
              </div>
              <h6>Guinea Pig Day Care</h6>
              <p className="grey">Your client's guinea pigs stay at your home during the day, Drop offs are around 7-9am, and pick ups are around 4-6pm.</p>
            </div>
            <div className="service-price">
              <p className="grey">What do you want clients to pay per guinea pig per day?</p>
              <div className="price-input-pos">
                <div className="dollar">$</div>
                <input 
                  value={this.state['Guinea Pig Day Care'] ? this.state['Guinea Pig Day Care']['price'] : ''}
                  className="price" 
                  type="number" 
                  placeholder='30'
                  onChange={this.update('Guinea Pig Day Care')}/>
              </div>
            </div>

            <div className="service-box">
              <div className="service-circle">
                  <img src={window.pawWhite} />
              </div>

              <div className="switch-pos">
                <label className="active-switch">
                  <input type="checkbox" checked={this.state['Guinea Pig Grooming'] ? true : false}/>
                  <span className="slider" />
                </label>
              </div>
              <h6>Guinea Pig Grooming</h6>
              <p className="grey">You client drops off their guinea pig for grooming.</p>
            </div>
            <div className="service-price">
              <p className="grey">What do you want clients to pay per guinea pig?</p>
              <div className="price-input-pos">
                <div className="dollar">$</div>
                <input 
                  value={this.state['Guinea Pig Grooming'] ? this.state['Guinea Pig Grooming']['price'] : ''}
                  className="price" 
                  type="number" 
                  placeholder='30'
                  onChange={this.update('Guinea Pig Grooming')}/>
              </div>
            </div>
            <button className="update-form-submit" type="submit">Save &#38; Continue</button>
          </form>
          <div className="clearfix" />
        </div>
      </div>
      </>
    )
  }
}

export default UpdateServices;