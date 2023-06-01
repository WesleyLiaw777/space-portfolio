import React from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src={Logo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a href="https://github.com/WesleyLiaw777/" target="_blank">Github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/wesleyliaw/" target="_blank">LinkedIn</a>
        </div>
        <div>
          <a href="mailto:me@wesleyliaw.com" target="_blank">Email</a>
        </div>
        <div>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2023 Wesley Liaw</div>
    </div>
  );
};

export default Footer;
