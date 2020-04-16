import React from 'react';
import ContactFromServItem from './contact_form_serv_item';
import ContactFormServItem from './contact_form_serv_item';

class ContactForm extends React.Component {
  componentDidMount() {
    this.props.fetchMember(this.props.match.params.memberId)
    this.props.fetchServices(this.props.match.params.memberId)
  }

  render() {
    const { sitter, currentMember, services } = this.props;

    if (!sitter) {
      return null;
    }
    
    const allServices = sitter.service_ids.map(id => {
      let serv = services[id];

      if (serv) {
        return (
          <ContactFormServItem serv={serv} />
        )
      }
    });

    return(
      <div className="white-bg">
        <div className="contact-form-container">
          <h1>Contact {sitter.first_name}</h1>
          <div className="contact-serv-container">
            {allServices}
          </div>

          <p>When would you like to drop off?</p>
        </div>
      </div>
    )
  }
}

export default ContactForm