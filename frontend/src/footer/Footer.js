import React from "react";
import "./Footer.css";
import logoSvg from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-wrapper-box">
          <h5 className="footer-wrapper-box-header">Abstract</h5>
          <li className="footer-wrapper-box-li">Branches</li>
        </div>
        <div className="footer-wrapper-box">
          <h5 className="footer-wrapper-box-header">Resources</h5>
          <li className="footer-wrapper-box-li">Blog</li>
          <li className="footer-wrapper-box-li">Help Center</li>
          <li className="footer-wrapper-box-li">Release Notes</li>
          <li className="footer-wrapper-box-li">Status</li>
        </div>
        <div className="footer-wrapper-box">
          <h5 className="footer-wrapper-box-header">Community</h5>
          <li className="footer-wrapper-box-li">Twitter</li>
          <li className="footer-wrapper-box-li">LinkedIn</li>
          <li className="footer-wrapper-box-li">Facebook</li>
          <li className="footer-wrapper-box-li">Dribbble</li>
          <li className="footer-wrapper-box-li">Podcast</li>
        </div>
        <div className="footer-wrapper-box">
          <h5 className="footer-wrapper-box-header">Company</h5>
          <li className="footer-wrapper-box-li">About Us</li>
          <li className="footer-wrapper-box-li">Careers</li>
          <li className="footer-wrapper-box-li">Legal</li>
          <li className="footer-wrapper-box-li contact-us">Contact Us</li>
          <li className="footer-wrapper-box-li">info@abstract.com</li>
        </div>
        <div className="footer-wrapper-box footer-end">
          <img src={logoSvg} alt="" className="footer-end-logo" />
          <li className="footer-wrapper-box-li">©️ Copyright 2022</li>
          <li className="footer-wrapper-box-li">
            Abstract Studio Design, Inc.
          </li>
          <li className="footer-wrapper-box-li">All Rights Reserved</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
