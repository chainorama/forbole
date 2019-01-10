import React, { Component } from 'react';

const Footer = () => {
  let year = new Date().getFullYear();
  if (year != '2019'){
    year = '2019-'+year;
  }

  return (
    <footer className="footer">
        <div className="container">
            <nav className="pull-left">
              <ul>
                <li>
                  <a href="https://www.forbole.com" target="_blank">About Us</a>
                </li>
                <li>
                  <a href="https://www.forbole.com/#contact" target="_blank">Contact Us</a>
                </li>
                <li>
                  <a href="https://medium.com/forbole/" target="_blank">Blog</a>
                </li>
                <li>
                  <a href="https://www.forbole.com/privacy-policy/" target="_blank">Privacy Policy</a>
                </li>
              </ul>
            </nav>
            <div className="copyright pull-right">
                &copy; {year}, made with <i className="fa fa-heart heart"></i> by Forbole Limited.
            </div>
            <div className="motto">Don't trust. Verify.</div>
        </div>
    </footer>
  );
}

export default Footer;
