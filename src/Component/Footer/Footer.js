import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-distributed">
      <div className="footer-left">
        <h3>
          Tution<span>Fixer</span>
        </h3>

        <p className="footer-links">
          <Link to="/">Home</Link>·<Link to="/blog">Blog</Link>·
          <a href="/home/#contact">Contact Us</a>·
          <Link to="/about">About Us</Link>
        </p>

        <p className="footer-company-name">TutionFixer.com &copy; 2020</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Metropolitan University</span> Sylhet, Bangladesh
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+880 123 456789</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:suhin4000@gmail.com">info@tutionfixer.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Tution Fixer</span>
          A Platform to connect student and teachers. All over the country.
          <br />
          -Website Developed by Suhin & Shuvo-
        </p>

        <div className="footer-icons">
          <a href="#">
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="#">
            <TwitterIcon></TwitterIcon>
          </a>
          <a href="#">
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a href="#">
            <GitHubIcon></GitHubIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
