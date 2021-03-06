import React from 'react';
import UpdateHeader from '../update_header/update_header';
import { Link } from 'react-router-dom';

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
    this.removeGPig = this.removeGPig.bind(this)
  }

  componentDidMount() {
    this.props.fetchGuineaPigs(this.props.currentMember.id)
      .then(() => this.setState(this.props.guineaPig));
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('guinea_pig[name]', this.state.name);
    formData.append('guinea_pig[age]', parseInt(this.state.age));
    formData.append('guinea_pig[sex]', this.state.sex);

    if (this.state.photoFile) {
      formData.append('guinea_pig[photo]', this.state.photoFile);
    }

    const requestUrl = this.props.method === 'POST' ? '/api/guinea_pigs' : `/api/guinea_pigs/${this.state.id}`;

    $.ajax({
      method: this.props.method,
      url: requestUrl,
      data: formData,
      contentType: false, 
      processData: false
    }).then(() => this.props.history.push('/account'));
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
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  removeGPig(e) {
    e.preventDefault();
    this.props.removeGuineaPig(this.props.guineaPig.id)
      .then(() => this.props.history.push('/account/profile/your-piggies'));
  }

  render() {
    const { guineaPigs, currentMember, formType, removeGuineaPig, guineaPig } = this.props;

    if (!guineaPigs) {
      return null;
    }
    
    const allPiggies = currentMember.guinea_pig_ids.map(pigId => {
      const gPig = guineaPigs[pigId];

      if (gPig) {
        if (gPig.photoUrl === "") {
          return <Link key={`gpig-${pigId}`} to={`/account/profile/your-piggies/${pigId}`}><div className="u-pig bg-green">
            <img src={window.paw} />
            <p className="center">{gPig.name}</p>
          </div></Link>
        } else {
          return <Link key={`gpig-${pigId}`} to={`/account/profile/your-piggies/${pigId}`}><div className="u-pig">
            <img src={gPig.photoUrl} />
            <p>{gPig.name}</p>
          </div></Link>
        }
      } else {
        return '';
      }
    })

  const removeButton = guineaPig ? <button onClick={this.removeGPig}>Remove {guineaPig.name}</button> : "";

    return (
      <>
        <UpdateHeader location='#/account/profile/your-piggies' />
        <div className="update-container">
          <div className="u-your-piggies flex-row jus-center">
            {allPiggies}
            <Link to="/account/profile/your-piggies">
              <div className="u-pig add">
                <i className="fas fa-plus-circle"></i>
                Add a piggy
              </div>
            </Link>
          </div>
          <div className="update-form-content">
            <h3>{formType}</h3>
            <p className="center">{this.props.formType === "Add a Piggy" ? 'Tell us a bit about your guinea pig' : 'Update information about your guinea pig'}</p>
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
                        checked={this.state.sex === 'Male' ? true : false}/>
                      <label className="font-reset">Male</label>
                      <input 
                        type="radio"
                        value="Female"
                        onChange={this.update('sex')}
                        name="sex"
                        checked={this.state.sex === 'Female' ? true : false} />
                       <label className="font-reset">Female</label>
                    </div>
                    </label>
                  </div>
                </div>
                
                <label className="piggy-photo-box flex-row jus-center align-center">
                  <p className={this.state.photoUrl ? "hidden" : ""}><i className="fas fa-image"></i>&nbsp;&nbsp;Upload a photo</p>
                  <img className="uploaded-photo" src={this.state.photoUrl} />
                  <input 
                    type="file"
                    onChange={this.handleFile} />
                </label>
              </div>
              <button className="update-form-submit" type="submit">{formType}</button>
            </form>
            <p className="remove">{removeButton}</p>
            <div className="clearfix" />
          </div>
        </div>
      </>
    )
  }
}

export default UpdateYourPiggies;