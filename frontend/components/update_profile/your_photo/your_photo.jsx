import React from 'react';
import UpdateHeader from '../update_header/update_header';

class YourPhoto extends React.Component {
  render () {
    return(
      <>
        <UpdateHeader location={location.hash} />
        <div className="update-container">
          <h3>Change your Profile Photo</h3>
          <div className="flex-column">
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
                <img src={this.props.currentMember.photoUrl} />
              </div>
            </div>
            <button className="update-form-submit" type="submit">Save &#38; Continue</button>
          </div>
      </div>
    </>
    )
  }
}

export default YourPhoto;