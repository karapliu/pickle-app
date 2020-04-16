import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.processForm({email: 'karaliu@email.com', password: 'karapassword'})
      .then(() => this.props.history.push('/account'))
  }

  handleSubmit(e) {
    e.preventDefault();
    const member = Object.assign({}, this.state);
    this.props.processForm(member)
      .then(() => this.props.history.push('/account'))
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  // renderErrors() {
  //   const { errors } = this.props;

  //   if (errors.length > 0) {
  //     const errorsLis = errors.map((err, i) => (
  //       <li key={`err-${i}`}>{err}</li>
  //     ));

  //     return (
  //       <ul className='signin-errors'>{errorsLis}<button onClick={() => this.props.clearErrors()} class="err-exit">x</button></ul>
  //     )
  //   }
  // }

  render() {
    const { errors} = this.props;
    let errorsUl = "";

    if (errors.length > 0) {
      const errorsLis = errors.map((err, i) => (
        <li key={`err-${i}`}>{err}</li>
      ));

      errorsUl = <ul className='signin-errors'>{errorsLis}<button onClick={() => this.props.clearErrors()} className="err-exit">x</button></ul>;
    }

    return (
      <div className="session-form-container">
        <h1>Sign In to Pickle</h1>
        {errorsUl}
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label className="session-form-label">
            Email
            <input
              type="email"
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

          <button className="session-form-submit" type="submit">Sign In</button>
          <button className="session-form-submit" type="submit" onClick={this.demoLogin}>Demo User</button>
        </form>
        <p>Don't have a Pickle account? <Link to="/signup">Sign up now.</Link></p>
      </div>
    );
  }
}

export default SignInForm;