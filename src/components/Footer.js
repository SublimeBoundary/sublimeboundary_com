import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/Sublime Boundary - logotype - 1920x1920px - 2020-09-26-v01.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">

        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest news
                      </Link>
                    </li>

                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                
              </div>
              <div className="column is-4 social">
              <a title="sales@sublimeboundary.com" href="mailto:sales@sublimeboundary.com" target="_blank" rel="noopener noreferrer nofollow">
                  <img src="https://cdn-icons-png.flaticon.com/16/542/542689.png" alt="Facebook" style="width: 1em; height: 1em;"></a>
              <a title="facebook" href="https://facebook.com/sublimeboundary">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                
                <a title="instagram" href="https://instagram.com/sublimeboundary">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                
                  
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
