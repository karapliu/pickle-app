import React from 'react';
import UpdateHeader from '../update_header/update_header';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentMember;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const member = Object.assign({}, this.state);
    this.props.processForm(member);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return(
      <>
      <UpdateHeader location={location.hash} />
      <div className="update-container">
        <div className="update-form-content">
          <h3>Tell us about your guinea pig care experience</h3>
          <p className="center">Your profile descriptions help guinea pig owners get to know you, so share details about
            what makes you one of Pickle's guinea pig people. We recommend keeping any personal identifiers
            (like your last name or workplace) in your profile.</p>

            <form className="flex-column jus-center" onSubmit={this.handleSubmit}>
              <textarea
                className="update-textarea"
                onChange={this.update('about_me')}
                value={this.state.about_me}
                rows='7'
              />
              <button className="update-form-submit" type="submit">Save &#38; Continue</button>
            </form>
        </div>
      </div>
      </>
    )
  }
}

export default Details;