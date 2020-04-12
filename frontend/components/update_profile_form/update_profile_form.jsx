import React from 'react';
import { Link } from 'react-router-dom';

class UpdateProfileForm extends React.Component {
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
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleFile(e) {
    this.setState({ photoUrl: e.currentTarget.files[0]})
  }

  render() {
    console.log(this.state);
    return(
      <>
      <div className="update-form-header">
        <Link className="active" to="/account/profile/account-info"><i className="fas fa-info-circle"></i> Account Info</Link>
        <Link to="/"><i className="fas fa-hand-holding-usd"></i> Services &#38; Rates</Link>
      </div>

      <div className="update-form-content-container">
        <div className="update-form-content">
          <h3 className="update-h3">Let's start with the basics</h3>
          <p className="center">Information that will be on your profile.</p>
          <h6>Update your personal information</h6>
          <form className="update-form" onSubmit={this.handleSubmit}>
            <div className="update-form-name">
              <label className="update-form-name-label">First Name
                <input 
                  type="text"
                  onChange={this.update('first_name')}
                  value={this.state.first_name}
                  className="update-form-input"
                />
              </label>

              <label className="update-form-name-label">Last Name
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

            <div className="update-form-last">
              <label className="update-form-label">Zipcode</label>
                <input
                    type="text"
                    onChange={this.update('zipcode')}
                    value={this.state.zipcode}
                    className="update-form-input-zip"
                  />
            </div>

            <div className="photo-upload-container">
              <div className="photo-upload-left">
                <h6>Profile Photo</h6>
                <p>This is the first photo guinea pig owners will see. Build trust! 
                  Well-lit, clear frontal face photos (no sunglasses) are recommended. 
                  Recommended dimensions are 400 x 400 pixels.
                </p>
                <label className="upload-button">
                  <i className="fas fa-image"></i> Upload Your Photo
                  <input
                    type="file"
                    onChange={this.handleFile} />
                </label>
              </div>
              <div className="photo-upload-right">
                <img src={this.props.currentMember.photoUrl} />
              </div>
            </div>
            <button className="update-form-submit" type="submit">Save &#38; Continue</button>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default UpdateProfileForm;