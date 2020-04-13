import React from 'react';
import UpdateHeader from '../update_header/update_header';
import { Redirect } from 'react-router-dom';

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentMember;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const member = Object.assign({}, this.state, { ['zipcode']: parseInt(this.state.zipcode) });
    this.props.processForm(member);
    <Redirect to="/" />
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleFile(e) {
    this.setState({ photoUrl: e.currentTarget.files[0]})
  }

  render() {
    return(
      <>
      <UpdateHeader location={location.hash} />
      <div className="update-container">
        <h3>Let's start with the basics</h3>
        <div className="update-form-content">
          <p className="grey center">Information that will be on your profile.</p>
          <h6>Update your personal information</h6>
          <form className="flex-column" onSubmit={this.handleSubmit}>
            <div className="flex-row space-between">
              <label className="update-form-label width-100 padding-r30">First Name
                <input 
                  type="text"
                  onChange={this.update('first_name')}
                  value={this.state.first_name}
                  className="update-form-input"
                />
              </label>

              <label className="update-form-label width-100">Last Name
                <input 
                  type="text"
                  onChange={this.update('last_name')}
                  value={this.state.last_name}
                  className="update-form-input"
                />
              </label>
            </div>

            <label className="update-form-label">Email
              <input 
                type="email"
                onChange={this.update('email')}
                value={this.state.email}
                className="update-form-input"
              />
            </label>

            <div className="flex-column">
              <label className="update-form-label">Zipcode</label>
                <input
                    type="text"
                    onChange={this.update('zipcode')}
                    value={this.state.zipcode}
                    className="update-form-input zip"
                  />
            </div>

            <button className="update-form-submit" type="submit">Save &#38; Continue</button>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default AccountInfo;