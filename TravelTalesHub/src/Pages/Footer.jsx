import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col-md-3 col-sm-6">
            <h4>THICC MEMES INC</h4>
            <ul className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Street South North</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col-md-3 col-sm-6">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col-md-3 col-sm-6">
            <h4>WELL ANOTHER COLUMN</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
          {/* Column4 */}
          <div className="col-md-3 col-sm-6">
            <h4>Social Media</h4>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved | Terms Of Service | Privacy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
