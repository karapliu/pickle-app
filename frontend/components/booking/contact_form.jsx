import React from 'react';
// import ContactFormServItem from './contact_form_serv_item';
import { Link } from 'react-router-dom';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      start_time: '',
      end_date: '',
      end_time: '',
      message: '',
      service_id: '',
      sitter_id: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, {['sitter_id']: this.props.sitter.id, ['members_service_id']: this.state.service_id, ['message']: this.state.message });
    booking['start_date'] = this.state.start_date + ' ' + this.state.start_time;
    booking['end_date'] = this.state.end_date + ' ' + this.state.end_time;
    debugger;
    this.props.processForm(booking);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleService(id) {
    this.setState({ ['service_id']: id })
  }

  componentDidMount() {
    this.props.fetchMember(this.props.match.params.memberId)
    this.props.fetchServices(this.props.match.params.memberId)
    this.props.fetchGuineaPigs(this.props.currentMember.id)
  }

  render() {
    console.log(this.state);
    const { sitter, currentMember, services, guineaPigs } = this.props;

    if (!sitter) {
      return null;
    }
    
    
    const allServices = sitter.service_ids.map(id => {
      let serv = services[id];

      if (serv) {
        const icon = () => {
          switch (serv.name) {
            case "Guinea Pig Boarding":
              return <i className="fas fa-suitcase"></i>;
            case "House Sitting":
              return <i className="fas fa-home"></i>;
            case "Drop-In Visits":
              return <i className="fas fa-carrot"></i>;
            case "Guinea Pig Day Care":
              return <i className="fas fa-sun"></i>;
            case "Guinea Pig Grooming":
              return <img src={window.paw} />;
          }
        };

        return (
          <label key={`c-serv-${id}`} className="contact-serv-item-container">
            <input
              type="radio"
              name="service" 
              onChange={() => this.handleService(id)} />

            <div className="contact-serv-item">
              <div>{icon()}</div>
              <div>{serv.name}</div>
            </div>
          </label>
        )
      }
    });

    const allPets = currentMember.guinea_pig_ids.map(id => {
      let pig = guineaPigs[id];

      if (pig) {
        if (pig.photoUrl === "") {
          return (
            <li key={`c-gpig-${id}`}>
              <div className="flex-row align-center">
                <i className="far fa-check-square"></i>
                <div className="c-gpig-img">
                  <img src={window.paw} />
                </div>
                <div className="flex-column">
                  {pig.name}
                  <span className="grey">Age: {pig.age}</span>
                </div>

              </div>
              <Link to={`/account/profile/your-piggies/${id}`}>Edit</Link>
            </li>
          )
        }
        return (
          <li key={`c-gpig-${id}`}>
            <div className="flex-row align-center">
              <i className="far fa-check-square"></i>
              <div className="c-gpig-img">
                <img src={pig.photoUrl} />
              </div>
              <div className="flex-column">
                {pig.name}
                <span className="grey">Age: {pig.age}</span>
              </div>

            </div>
            <Link to={`/account/profile/your-piggies/${id}`}>Edit</Link>
          </li>
        )
      }
    })

    return(
      <div className="white-bg">
        <form onSubmit={this.handleSubmit} className="contact-form-container">
          <h1>Contact {sitter.first_name}</h1>
          <div className="contact-serv-container">
            {allServices}
          </div>
          
          <div className="flex-row space-between">
            <div className="flex-column width-100">
              <p>When would you like to drop off?</p>
              <div className="pos-relative">
                <input 
                  type="date" 
                  onChange={this.update('start_date')}
                  />
                <div className="i-datetime"><i className="far fa-calendar-alt"></i></div>
              </div>
            </div>
            <div className="flex-column width-100">
              <p>At what time?</p>       
                <div className="pos-relative width-100">
                  <input 
                    type="time" 
                    onChange={this.update('start_time')} 
                  />
                  <div className="i-datetime"><i className="far fa-clock"></i></div>
                </div>
            </div>
          </div>
          
          <div className="flex-row space-between">
            <div className="flex-column width-100">
              <p>When would you like to pick up?</p>
              <div className="pos-relative">
                <input 
                  type="date" 
                  onChange={this.update('end_date')} 
                  />
                <div className="i-datetime"><i className="far fa-calendar-alt"></i></div>
              </div>
            </div>
            <div className="flex-column width-100">
              <p>At what time?</p>
              <div className="pos-relative width-100">
                <input 
                  type="time" 
                  onChange={this.update('end_time')}
                  />
                <div className="i-datetime"><i className="far fa-clock"></i></div>
              </div>
            </div>
          </div>

          <p className="normal-font center">For your safety &#38; security, Pickle will not expose your phone number.</p>
          <h2>Your Pets</h2>
          <ul className="pig-ul">
            {allPets}
          </ul>

          <Link className="c-add" to="/account/profile/your-piggies"><i className="fas fa-plus-circle"></i> Add a piggy</Link>

          <h2>Message</h2>
          <p className="normal-font">Share a little info about your piggy and why they'd have a great time with {sitter.first_name}.</p>
          <textarea
            className="contact-textarea"
            rows='5' 
            onChange={this.update('message')}/>
          
          <div className="terms">No payment required per Pickle's Terms of Service.</div>
          <button className="contact-form-submit" type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default ContactForm