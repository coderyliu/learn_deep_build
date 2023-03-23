import React, { memo } from "react";
import footerImg from '../assets/imgs/nhlt.jpg'

const Footer = memo(() => {
  return (
    <div id="footer">
      <h2>Footer Page</h2>
      <p>© 2023 React Web System</p>
      <img src={footerImg}/>
    </div>
  );
});

export default Footer;
