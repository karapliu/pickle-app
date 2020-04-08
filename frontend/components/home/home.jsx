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
        <h3 className="home-h3">Services for every guinea pig</h3>

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
      </div>
      <div className="home-container-3">
        <div className="gpig-img">
          <div className="quote">
            <div className="quote-border" />
            My Pickle sitter was amazing! She sent me updates and took care of my guinea pig as if
            he was her own. <span className="author">- Nancy M.</span>
            <div className="quote-bottom">We're The Guinea Pig People.</div>
          </div>
          <div className="img-cred">Photo by <a href="https://unsplash.com/@moyathebunny">Chan Swan</a></div>
        </div>
      </div>
      <div className="home-container-4">
        <h3 className="home-h3">We're the treat-your-guinea-pig-like-family guinea pig people</h3>
        <div className="step-line-container">
          <ul className="step-line">
            <li>
              <i class="fas fa-clipboard-list container-4-icon"></i>
              <h6 className="home-h6">Discover nearby, trusted sitters</h6>
              <p>Get matched with one of our on-demand guinea-pig groomers, or browse 
                for an overnight or day  care sitter
              </p>
            </li>
            <li>
              <i class="fas fa-mobile-alt container-4-icon"></i>
              <h6 className="home-h6">Book &#x26; pay on Pickle</h6>
              <p>Book and pay securely through the website or app</p>
            </li>
            <li>
              <i class="far fa-grin-wink container-4-icon"></i>
              <h6 className="home-h6">Relax</h6>
              <p>Get the Pickle Guarantee, 24/7 support, and reservation protection</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-container-5">
        <h3 className="home-h3">Coming to your App Store one day</h3>
        <img className="phone-img" src={window.phoneUrl}/>
      </div>
      <div className="all-sitters">
        
      </div>
    </>
  );
};

export default Home;