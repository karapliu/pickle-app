import React from 'react';
import UpdateHeaderLink from './update_header_link';

const UpdateHeader = ({ location }) => {
  const path = location.slice(1);

  return (
    <div className="update-form-header">
      <UpdateHeaderLink location={path} path="/account/profile/account-info" name={<><i className='fas fa-info-circle'></i> Account Info</>} />
      <UpdateHeaderLink location={path} path="/account/profile/photo" name={<><i className='fas fa-portrait'></i> Your Photo</>} />
      <UpdateHeaderLink location={path} path="/account/profile/services" name={<><i className='fas fa-hand-holding-usd'></i> Services &#38; Rates</>} />
      <UpdateHeaderLink location={path} path="/account/profile/details" name={<><i className='far fa-id-card'></i> Sitter Profile</>} />
      <UpdateHeaderLink location={path} path="/account/profile/your-piggies" name={<><i className='fab fa-gratipay'></i> Your Piggies</>} />
    </div>
  )
}

export default UpdateHeader;