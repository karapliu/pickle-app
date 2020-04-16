import React from 'react';
import ContactFormServItem from './contact_form_serv_item';
import { Link } from 'react-router-dom';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      message: ''
    }
  }
  componentDidMount() {
    this.props.fetchMember(this.props.match.params.memberId)
    this.props.fetchServices(this.props.match.params.memberId)
    this.props.fetchGuineaPigs(this.props.currentMember.id)
  }

  render() {
    const { sitter, currentMember, services, guineaPigs } = this.props;

    if (!sitter) {
      return null;
    }
    
    const allServices = sitter.service_ids.map(id => {
      let serv = services[id];

      if (serv) {
        return (
          <ContactFormServItem key={`c-serv-${id}`} serv={serv} />
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
        <div className="contact-form-container">
          <h1>Contact {sitter.first_name}</h1>
          <div className="contact-serv-container">
            {allServices}
          </div>

          <div className="flex-row space-between">
            <div className="flex-column width-100">
              <p>When would you like to drop off?</p>
              <div className="pos-relative">
                <input type="date" />
                <div className="i-calendar"><i className="far fa-calendar-alt"></i></div>
              </div>
            </div>
            <div className="flex-column width-100">
              <p>Between what times?</p>
              <div className="time-flex">
                <div className="pos-relative width-100">
                  <input type="time" />
                  <div className="i-calendar"><i className="far fa-clock"></i></div>
                </div>
                <div className="pos-relative width-100">
                  <input type="time" />
                  <div className="i-calendar"><i className="far fa-clock"></i></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-row space-between">
            <div className="flex-column width-100">
              <p>When would you like to pick up?</p>
              <div className="pos-relative">
                <input type="date" />
                <div className="i-calendar"><i className="far fa-calendar-alt"></i></div>
              </div>
            </div>
            <div className="flex-column width-100">
              <p>Between what times?</p>
              <div className="time-flex">
                <div className="pos-relative width-100">
                  <input type="time" />
                  <div className="i-calendar"><i className="far fa-clock"></i></div>
                </div>
                <div className="pos-relative width-100">
                  <input type="time" />
                  <div className="i-calendar"><i className="far fa-clock"></i></div>
                </div>
              </div>
            </div>
          </div>

          <p className="normal-font center">For your safety &#38; security, Pickle will not expose your phone number.</p>
          <h2>Your Pets</h2>
          <ul className="pig-ul">
            {allPets}
          </ul>

          <Link className="c-add" to="/account/your-piggies"><i class="fas fa-plus-circle"></i> Add a piggy</Link>

          <h2>Message</h2>
          <p className="normal-font">Share a little info about your piggy and why they'd have a great time with {sitter.first_name}.</p>
          <textarea
            className="contact-textarea"
            rows='5' />
          
          <div className="terms">No payment required per Pickle's Terms of Service.</div>
          <button className="contact-form-submit" type="submit">Send</button>
        </div>
      </div>
    )
  }
}

export default ContactForm