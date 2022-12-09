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
                  <svg role="img" aria-labelledby="_em">
            <title id="_em">Email</title>
            <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.158.154-.352.23-.58.23h-8.547v-6.959l1.6 1.229c.102.085.229.126.379.126.148 0 .277-.041.389-.127L24 7.387zm-9.365-2.021h8.547c.211 0 .393.063.543.192.15.128.234.3.248.51l-7.369 5.876-1.969-1.549V5.366zM13.404.864v22.271L0 20.819V3.244L13.406.864h-.002zm-4.049 11.18c-.02-1.133-.313-2.072-.879-2.814-.555-.74-1.275-1.131-2.131-1.164-.824.033-1.529.423-2.1 1.164-.57.742-.855 1.682-.87 2.814.015 1.117.315 2.047.885 2.791.571.74 1.274 1.133 2.101 1.176.855-.035 1.574-.424 2.145-1.17.57-.748.87-1.68.885-2.797h-.036zm-3.12-2.482c.431.02.794.256 1.083.717.285.461.435 1.045.435 1.752 0 .721-.149 1.307-.435 1.771-.301.464-.66.704-1.096.704s-.795-.226-1.095-.69-.435-1.05-.435-1.754c0-.705.135-1.291.435-1.74.284-.45.646-.69 1.081-.721l.027-.039z"></path>
        </svg></a><a title="facebook" href="https://facebook.com/sublimeboundary">
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
