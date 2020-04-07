import React from 'react';

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
      <div className="session-form">
        <h2>Sign Up for Pickle</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            First name
            <input
              type="text"
              onChange={this.update('first_name')}
              value={this.state.first_name} />
          </label>

          <label>
            Last name
            <input
              type="text"
              onChange={this.update('last_name')}
              value={this.state.last_name} />
          </label>

          <label>
            Zipcode
            <input
              type="text"
              onChange={this.update('zipcode')}
              value={this.state.zipcode} />
          </label>

          <label>
            Email
            <input
              type="text"
              onChange={this.update('email')}
              value={this.state.email} />
          </label>

          <label>
            Password
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password} />
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;