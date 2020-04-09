import React from 'react';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchMember(this.props.match.params.memberId)
  }

  render() {
    const { member } = this.props;
    if (!member) {
      return null;
    }
    
    return (
      <div className="profile">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-photo">
              <img src={member.photoUrl} />
            </div>

            <div className="profile-header-info">
              <h1 className="prof-h1">{member.first_name}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;