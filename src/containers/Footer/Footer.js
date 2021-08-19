import React from "react";
import * as texts from "../../Utilities/textForApp";
import "./Footer.css";
import Group3 from "../../Assets/Group 3.png";
import logo from "../../Assets/logo.png";
import facebook from "../../Assets/Facebook.png";
import Instagram from "../../Assets/Instagram.png";
import Twitter from "../../Assets/Twitter.png";
import WhatsApp from "../../Assets/WhatsApp.png";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const icons = [facebook, Instagram, Twitter, WhatsApp];

  const showSocialIcons = icons.map((icon) => (
    <SocialIcon className="icon" src={icon} key={icon} />
  ));

  return (
    <div className="footer">
      <div className="topPart">
        <img src={Group3} className="newsBtn" />
        <p>{texts.FOOTER_H2}</p>
      </div>
      <div>
        <div className="bottomPart">
          <div className="socialMedia">{showSocialIcons}</div>
          <img src={logo} className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
