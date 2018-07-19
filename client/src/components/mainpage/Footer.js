import React from 'react';
import { copyright, github, twitter, instagram, linkedin } from '../helper/svgList.js';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="socialmedia">
          <a
            href="https://www.linkedin.com/in/jinwoo-oh/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {linkedin()}
          </a>
          <a href="http://instagram.com/jinwoooh" target="_blank" rel="noreferrer noopener">
            {instagram()}
          </a>
          <a href="https://twitter.com/Jinwoo_Oh" target="_blank" rel="noreferrer noopener">
            {twitter()}
          </a>
          <a href="http://github.com/JinwooOh/" target="_blank" rel="noreferrer noopener">
            {github()}
          </a>
        </div>
        <p className="footer__copyright">{copyright()} 2018 Jinwoo </p>
      </div>
    );
  }
}
export default Footer;
