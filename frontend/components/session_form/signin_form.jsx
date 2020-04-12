import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {
        email: '',
        password: ''
      },
      errors: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  demoLogin() {
    this.setState({
      member: {
        email: 'karaliu@email.com',
        password: 'karapassword'
      }
    });

    this.props.processForm(this.state);
    <Redirect to="/" />
  }

  handleSubmit(e) {
    e.preventDefault();
    const member = Object.assign({}, this.state.member);
    this.props.processForm(member);
    <Redirect to="/" />
  }

  update(field) {
    return e => this.setState({ member: {[field]: e.currentTarget.value }})
  }

  renderErrors() {
    const { errors } = this.props;
    const errorsLis = errors.map((err, i) => (
      <li key={`err-${i}`}>{err}</li>
    ));

    if (errors.length > 0) {
      return (
        <ul className='signin-errors'>{errorsLis}<button onClick={() => this.props.clearErrors()} class="err-exit">x</button></ul>
      )
    }
  }

  render() {

    return (
      <div className="session-form-container">
        <h1>Sign In to Pickle</h1>
        {this.renderErrors()}
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label className="session-form-label">
            Email
            <input
              type="email"
              onChange={this.update('email')}
              value={this.state.member.email}
              className="session-form-input" />
          </label>

          <label className="session-form-label">
            Password
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.member.password}
              className="session-form-input" />
          </label>

          <button className="session-form-submit" type="submit">Sign In</button>
          <button className="session-form-submit" type="submit" onClick={this.demoLogin}>Demo User</button>
        </form>
        <p>Don't have a Pickle account? <Link to="/signup">Sign up now.</Link></p>
      </div>
    );
  }
}

export default SignInForm;