import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '', 
      zipcode: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const newMember = Object.assign({}, this.state, { ['zipcode']: parseInt(this.state.zipcode) });
    this.props.processForm(newMember)
      .then(() => this.props.history.push('/account/profile/account-info'));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value})
  }

  renderErrors(field) {
    if (this.props.errors) {
      for (let i = 0; i < this.props.errors.length; i++) {
        let err = this.props.errors[i];

        if (err.includes(field)) {
          if (err === "First name can't be blank" || err === "Last name can't be blank" || err === "Email can't be blank" || (err === "Zipcode is not a number" && this.state.zipcode === '') || (err.includes("Password is too short") && this.state.password === '')) {
            return "This field is required."
          } else if (err === "Email is invalid") {
            return "Please enter a valid email address."
          } else if (err === "Zipcode is not a number") {
            return "Please enter a valid postcode."
          } else if (err.includes("Password is too short") && this.state.password.length > 0) {
            return "Please enter at least 8 characters."
          } else {
            return err;
          }
        }
      }
    }

    return null;
  }

  render() {
    return (
      <div className="session-form-container">
        <h1>Sign Up for Pickle</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label className={this.renderErrors("First name") ? "red-text" : ""}>
            First name
            <input
              type="text"
              onChange={this.update('first_name')}
              value={this.state.first_name}
              className={this.renderErrors("First name") ? "red-border" : ""} />
            
            <span className={this.renderErrors("First name") ? "signup-error" : "signup-error no-opacity"}>{this.renderErrors("First name")}</span>
          </label>

          <label className={this.renderErrors("Last name") ? "red-text" : ""}>
            Last name
            <input
              type="text"
              onChange={this.update('last_name')}
              value={this.state.last_name}
              className={this.renderErrors("Last name") ? "red-border" : ""} />

            <span className={this.renderErrors("Last name") ? "signup-error" : "signup-error no-opacity"}>{this.renderErrors("Last name")}</span>
          </label>

          <label className={this.renderErrors("Zipcode") ? "red-text" : ""}>
            Zipcode
            <input
              type="text"
              onChange={this.update('zipcode')}
              value={this.state.zipcode}
              className={this.renderErrors("Zipcode") ? "red-border" : ""} />

            <span className={this.renderErrors("Zipcode") ? "signup-error" : "signup-error no-opacity"}>{this.renderErrors("Zipcode")}</span>
          </label>

          <label className={this.renderErrors("Email") ? "red-text" : ""}>
            Email
            <input
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
              className={this.renderErrors("Email") ? "red-border" : ""} />

            <span className={this.renderErrors("Email") ? "signup-error" : "signup-error no-opacity"}>{this.renderErrors("Email")}</span>
          </label>

          <label className={this.renderErrors("Password") ? "red-text" : ""}>
            Create a Password
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password}
              className={this.renderErrors("Password") ? "red-border" : ""} />

            <span className={this.renderErrors("Password") ? "signup-error" : "signup-error no-opacity"}>{this.renderErrors("Password")}</span>
          </label>

          <button className="session-form-submit" type="submit">Sign Up</button>
        </form>

        <p>Already have a Pickle account? <Link to="/signin">Sign in now.</Link></p>
      </div>
    );
  }
}

export default SignupForm;