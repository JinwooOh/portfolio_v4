import React from 'react';
import Me from './../../img/image_255.png';
import { js, node, mySql, sass, java, react, git, css, html, mongoDB } from '../helper/svgList.js';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2 className="about__heading">About Me</h2>
        <div className="about__container1">
          <figure className="about__shape">
            <img className="about__img" src={Me} alt="me" />
            <figcaption className="about__caption">Jinwoo Oh</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="story__header">I am a Web Developer.</h3>
            <p>
              I am passionate about programming and am interested in web development. I have
              experience of working in the game industry for three years as a game designer and a
              producer. Striving of creating my own program makes me become a programmer and a
              university student again. I am currently focusing on learning web development along
              with studying computer science courses from UW-Madison. In my free time, I like to
              ride a bicycle that takes me anywhere, Recently, I finished bike tour from Madison to
              Minneapolis.
            </p>
          </div>
        </div>

        <div className="about__container2">
          <h3 className="story__header--skill">What Have I Worked with</h3>
          <div className="whatHaveIWorkWith">
            {js()}
            {node()}
            {react()}
            {mySql()}
            {mongoDB()}
            {sass()}
            {css()}
            {html()}
            {java()}
            {git()}
          </div>
        </div>
      </div>
    );
  }
}
export default About;
