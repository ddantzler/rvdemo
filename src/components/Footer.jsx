import React from "react";

import logoFooter from "../assets/images/pool-pros-logo-footer.png";
import iconFacebook from "../assets/images/facebook-icon.png";
import iconTwitter from "../assets/images/twitter-icon.png";
import iconYouTube from "../assets/images/youtube-icon.png";

// Render the large footer and social interaction
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logoFooter} alt="Pool Pros" />
      </div>
      <div className="footer-social">
        <span className="footer-social-text">CONNECT WITH US</span>
        <span className="footer-social-icons">
          <a href="/">
            <img src={iconTwitter} alt="Twitter" />
          </a>
          <a href="/">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="/">
            <img src={iconYouTube} alt="YouTube" />
          </a>
        </span>
      </div>
    </div>
  );
}
