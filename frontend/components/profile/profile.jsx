import React from 'react';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchMember(this.props.match.params.memberId)
  }

  render() {
    const { member } = this.props;
    return (
      <>
      <h1>Hello</h1>
      {member.first_name}
      </>
    )
  }
}

export default Profile;