import React from 'react';

const HostingPigs = ({ max }) => {
  switch (max) {
    case 1:
      return (
        <div className="hosting-pigs">
          <img src={window.hosting} />
          <img src={window.hostingGrey} />
          <img src={window.hostingGrey} />
          <img src={window.hostingGrey} />
          <img src={window.hostingGrey} />
        </div>
      );
    case 2:
      return (
        <div className="hosting-pigs">
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hostingGrey} />
          <img src={window.hostingGrey} />
          <img src={window.hostingGrey} />
        </div>
      );
    case 3:
      return (
        <div className="hosting-pigs">
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hostingGrey} />
          <img src={window.hostingGrey} />
        </div>
      );
    case 4: 
      return (
        <div className="hosting-pigs">
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hostingGrey} />
        </div>
      );
    case 5:
      return (
        <div className="hosting-pigs">
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hosting} />
          <img src={window.hosting} />
        </div>
      );
  }
};

export default HostingPigs;