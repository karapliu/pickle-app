import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign In to Pickle</h2>

        <form onSubmit={this.handleSubmit}>
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

export default SignInForm;