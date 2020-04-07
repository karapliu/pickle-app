import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-div">
          <h1>Local, loving Guinea Pig Care</h1>
          <h2>Book trusted sitters who'll treat your guinea pigs like family!</h2>
          <div className="two-box-container">
            <div className="form"></div>
            <div className="other-form"></div>
          </div>
        </div>
      </div>
      <div className="home-container-2">
        <h3>Services for every guinea pig</h3>

        <div className="two-box-container-2">
          <div className="left">
            <div className="logo-text-container">
              <div className="logo"><i class="fas fa-suitcase"></i></div>
              <div className="text">
                <h6>Guinea Pig Boarding</h6>
                <p>Perfect if you need overnight pet care.</p>
              </div>
            </div>
            <div className="logo-text-container">
              <div className="logo"><i class="fas fa-home"></i></div>
              <div className="text">
                <h6>House Sitting</h6>
                <p>Great if you need overnight pet or house-sitting services.</p>
              </div>
            </div>
            <div className="logo-text-container">
              <div className="logo"><i class="fas fa-paw"></i></div>
              <div className="text">
                <h6>Guinea Pig Grooming</h6>
                <p>Whenever your guinea pig needs a pamper.</p>
              </div>
            </div>
            <div className="logo-text-container">
              <div className="logo"><i class="fas fa-sun"></i></div>
              <div className="text">
                <h6>Guinea Pig Day Care</h6>
                <p>Daytime pet care in your sitter's guinea pig friendly home.</p>
              </div>
            </div>
            <div className="logo-text-container">
              <div className="logo"><i class="fas fa-carrot"></i></div>
              <div className="text">
                <h6>Drop-in Visits</h6>
                <p>For check-ins and play dates.</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-top">
              <i class="fas fa-ribbon right-top-logo"></i>
              <h4>Book with pet sitters that you can trust</h4>
            </div>
            <div className="right-bottom">
              <p><i class="fas fa-check check"></i> All new sitters pass a basic background check</p>
              <p><i class="fas fa-check check"></i> All sitters provide a detailed profile and personal information</p>
              <p><i class="fas fa-check check"></i> All sitters are approved by our team of sitter specialists</p>
              <Link to="/signup"><button>Book your next Pickle sitter</button></Link>
            </div>
          </div>
        </div>

        <div className="gpig-img"></div>
      </div>
    </>
  );
};

export default Home;