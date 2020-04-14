import React from 'react';
import UpdateHeader from '../update_header/update_header';

class UpdateYourPiggies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      age: '', 
      sex: '',
      photoFile: null,
      photoUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const guineaPig = Object.assign({}, this.state.guineaPig, { 'age': parseInt(this.state.age)});
    // this.props.addGuineaPig(guineaPig)
    const formData = new FormData();
    formData.append('guinea_pig[name]', this.state.name);
    formData.append('guinea_pig[age]', parseInt(this.state.age));
    formData.append('guinea_pig[sex]', this.state.sex);

    if (this.state.photoFile) {
      formData.append('guinea_pig[photo]', this.state.photoFile);
    }

    $.ajax({
      method: 'POST',
      url: 'api/guinea_pigs',
      data: formData,
      contentType: false, 
      processData: false
    }).then(() => this.props.history.push(`/members/${this.props.currentMember.id}`));
  }

  handleFile(e) {
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

  update(field) {
    // debugger;
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <>
        <UpdateHeader location={location.hash} />
        <div className="update-container">
          <div className="update-form-content">
            <h3>Add a piggy</h3>
            <p className="center">Tell us a bit about your guinea pig</p>
            <form className="flex-column" onSubmit={this.handleSubmit}>
              <div className="add-piggy">
                <label className="update-form-label">Name
                  <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="update-form-input"
                  placeholder="Name"
                  />
                </label>
                <div className="flex-row space-between">
                  <label className="update-form-label width-100 padding-r30">Age
                    <input type="number"
                    value={this.state.age}
                    onChange={this.update('age')}
                    className="update-form-input"
                    placeholder="Age"
                    />
                  </label>
                  <div className="flex-column">
                    <label className="update-form-label width-50">Sex
                    <div className="radio-buttons flex-row space-between">
                      <input 
                        type="radio"
                        value="Male"
                        onChange={this.update('sex')}
                        name="sex"
                        />
                      <label className="font-reset">Male</label>
                      <input 
                        type="radio"
                        value="Female"
                        onChange={this.update('sex')}
                        name="sex"
                        />
                       <label className="font-reset">Female</label>
                    </div>
                    </label>
                  </div>
                </div>
                <div className="piggy-photo-box flex-row jus-center align-center">
                  <p className={this.state.photoUrl ? "hidden" : ""}>Upload a photo by clicking the button below <i className="fas fa-hand-point-down"></i></p>
                  <img className="uploaded-photo" src={this.state.photoUrl} />
                </div>
                <div className="flex-row jus-center">
                  <label className="upload-button">
                    <i className="fas fa-image"></i> Upload a photo
                    <input 
                      type="file"
                      onChange={this.handleFile} />
                  </label>
                </div>
              </div>
              <button className="update-form-submit" type="submit">Add a Piggy</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default UpdateYourPiggies;