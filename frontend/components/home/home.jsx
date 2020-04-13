import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home-main-img flex-row jus-center align-center">
        <div className="flex-column">
          <h1>Local, loving Guinea Pig Care</h1>
          <h2>Book trusted sitters who'll treat your <br />guinea pigs like family!</h2>
          <div className="flex-row jus-center">
            <div className="home-search-form"></div>
            <div className="home-search-form-2"></div>
          </div>
        </div>
      </div>

      <div className="home-container-services white-bg">
        <h3>Services for every guinea pig</h3>

        <div className="flex-row jus-center">
          <div className="services-left">
            <div className="logo-text-container flex-row align-center">
              <div className="home-serv-logo"><i className="fas fa-suitcase"></i></div>
              <div>
                <h6>Guinea Pig Boarding</h6>
                <p className="grey">Perfect if you need overnight pet care.</p>
              </div>
            </div>
            <div className="logo-text-container flex-row align-center">
              <div className="home-serv-logo"><i className="fas fa-home"></i></div>
              <div>
                <h6>House Sitting</h6>
                <p className="grey">Great if you need overnight pet or house-sitting services.</p>
              </div>
            </div>
            <div className="logo-text-container flex-row align-center">
              <div className="paw"><img src={window.paw} /></div>
              <div>
                <h6>Guinea Pig Grooming</h6>
                <p className="grey">Whenever your guinea pig needs a pamper.</p>
              </div>
            </div>
            <div className="logo-text-container flex-row align-center">
              <div className="home-serv-logo"><i className="fas fa-sun"></i></div>
              <div>
                <h6>Guinea Pig Day Care</h6>
                <p className="grey">Daytime pet care in your sitter's guinea pig friendly home.</p>
              </div>
            </div>
            <div className="logo-text-container flex-row align-center">
              <div className="home-serv-logo"><i className="fas fa-carrot"></i></div>
              <div>
                <h6>Drop-in Visits</h6>
                <p className="grey">For check-ins and play dates.</p>
              </div>
            </div>
          </div>
          <div className="services-right">
            <div className="services-right-top flex-row jus-center align-center">
              <i className="fas fa-ribbon right-top-logo"></i>
              <h4>Book with pet sitters that you can trust</h4>
            </div>
            <div className="services-right-bottom">
              <p><i className="fas fa-check med-green"></i> All new sitters pass a basic background check</p>
              <p><i className="fas fa-check med-green"></i> All sitters provide a detailed profile and personal information</p>
              <p><i className="fas fa-check med-green"></i> All sitters are approved by our team of sitter specialists</p>
              <Link to="/signup"><button>Book your next Pickle sitter</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="white-bg">
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
              <i className="fas fa-clipboard-list container-4-icon"></i>
              <h6 className="home-h6">Discover nearby, trusted sitters</h6>
              <p>Get matched with one of our on-demand guinea-pig groomers, or browse 
                for an overnight or day  care sitter
              </p>
            </li>
            <li>
              <i className="fas fa-mobile-alt container-4-icon"></i>
              <h6 className="home-h6">Book &#x26; pay on Pickle</h6>
              <p>Book and pay securely through the website or app</p>
            </li>
            <li>
              <i className="far fa-grin-wink container-4-icon"></i>
              <h6 className="home-h6">Relax</h6>
              <p>Get the Pickle Guarantee, 24/7 support, and reservation protection</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-container-5">
        <h3 className="home-h3">Coming to your App Store one day</h3>
        <div className="phone">
          <img className="phone-img" src={window.phoneUrl}/>
        </div>
      </div>
    </div>
  );
};

export default Home;