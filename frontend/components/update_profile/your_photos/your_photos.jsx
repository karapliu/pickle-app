import React from 'react';
import UpdateHeader from '../update_header/update_header';

class YourPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
      photoUrl: null,
      photos: null
    };

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    debugger;
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ 
        photoFile: file, 
        photoUrl: fileReader.result 
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('member[profile_pic]', this.state.photoFile);
    $.ajax({
      method: 'PATCH',
      url: `/api/members/${this.props.currentMember.id}`,
      data: formData,
      contentType: false,
      processData: false
    }).then(() => this.props.history.push('/account/profile/services'));
  }

  render () {
    console.log(this.state);
    return(
      <>
        <UpdateHeader location={location.hash} />
        <div className="update-container">
          <h3>Change your Profile Photo</h3>
          <div className="flex-column">
            <form className="flex-column jus-center" onSubmit={this.handleSubmit}>

              <div className="update-form-content flex-row">
                <div className="photo-upload-left">
                  <p className="grey">This is the first photo guinea pig owners will see. Build trust!
                  Well-lit, clear frontal face photos (no sunglasses) are recommended.
                  Recommended dimensions are 400 x 400 pixels.</p>

                  <label className="upload-button">
                    <i className="fas fa-image"></i> Upload Your Photo
                    <input
                      type="file"
                      onChange={this.handleFile} />
                  </label>
                </div>

                <div className="photo-upload-right">
                  <img className="uploaded-photo" src={this.state.photoUrl} />
                  <img src={this.state.photoUrl ? "" : this.props.currentMember.photoUrl} />
                </div>
              </div>

              {/* <input
                type="file"
                onChange={e => this.setState({ photos: e.target.files })}
                multiple
              /> */}
              <button className="update-form-submit" type="submit">Save &#38; Continue</button>

            </form>
          </div>
      </div>
    </>
    )
  }
}

export default YourPhotos;