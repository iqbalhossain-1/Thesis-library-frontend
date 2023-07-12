import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="content list-unstyled" style={{ textAlign: 'start' }}>
              <h5><li >Services</li></h5>
              <li><a href="#!" style={{ color: 'white' }}>services</a></li>
              <li><a href="#!" style={{ color: 'white' }}>design</a></li>
              <li><a href="#!" style={{ color: 'white' }}>marketing</a></li>
              <li><a href="#!" style={{ color: 'white' }}>advertisement</a></li>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content list-unstyled" style={{ textAlign: 'center' }}>
              <h5><li >Company</li></h5>
              <li><a href="#!" style={{ color: 'white' }}>about us</a></li>
              <li><a href="#!" style={{ color: 'white' }}>contact</a></li>
              <li><a href="#!" style={{ color: 'white' }}>jobs</a></li>
              <li><a href="#!" style={{ color: 'white' }}>advertisement</a></li>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content list-unstyled">
              <h5><li >Legal</li></h5>
              <li><a href="#!" style={{ color: 'white' }}>terms of use</a></li>
              <li><a href="#!" style={{ color: 'white' }}>privacy policy</a></li>
              <li><a href="#!" style={{ color: 'white' }}>cookie policy</a></li>
            </div>
          </div>
        </div>
        <div className="footer-last-section text-center pb-3">
          <span>All rights reserved @2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
