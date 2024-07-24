// withSocialIcons.js
import React from 'react';
import SocialIcons from './SocialIcons';

const withSocialIcons = (WrappedComponent) => {
  return (props) => (
    <div className="with-social-icons">
      <WrappedComponent {...props} />
      <SocialIcons />
    </div>
  );
};

export default withSocialIcons;
