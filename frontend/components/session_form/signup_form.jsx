import React from 'react';
import { Link } from 'react-router-dom';

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

  handleSubmit(e) {
    e.preventDefault();
    const newMember = Object.assign({}, this.state, { ['zipcode']: parseInt(this.state.zipcode) });
    this.props.processForm(newMember);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value})
  }

  render() {
    return (
      <div className="session-form-container">
        <h1>Sign Up for Pickle</h1>

        <form className="session-form" onSubmit={this.handleSubmit}>
          <label className="session-form-label">
            First name
            <input
              type="text"
              onChange={this.update('first_name')}
              value={this.state.first_name}
              className="session-form-input" />
          </label>

          <label className="session-form-label">
            Last name
            <input
              type="text"
              onChange={this.update('last_name')}
              value={this.state.last_name}
              className="session-form-input" />
          </label>

          <label className="session-form-label">
            Zipcode
            <input
              type="text"
              onChange={this.update('zipcode')}
              value={this.state.zipcode}
              className="session-form-input" />
          </label>

          <label className="session-form-label">
            Email
            <input
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
              className="session-form-input" />
          </label>

          <label className="session-form-label">
            Password
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password}
              className="session-form-input" />
          </label>

          <button className="session-form-submit" type="submit">Sign Up</button>
        </form>

        <p>Already have a Pickle account? <Link to="/signin">Sign in now.</Link></p>
      </div>
    );
  }
}

export default SignupForm;