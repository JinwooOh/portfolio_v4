import React from 'react';
import core from '../../img/core.png';
import tools from '../../img/tools.png';
import others from '../../img/others.png';

class Skill extends React.Component {
  render() {
    return (
      <div className="skill">
        <h2 className="skill__heading">Skill</h2>
        <div className="skill__container">
          <div className="skill__core">
            <img className="skill__img" src={core} alt="core" />
            <h2 className="skill__title--big">Core</h2>
            <h3 className="skill__title--small">HTML, CSS, Javascript</h3>
            <p className="skill__desc">
              I found that I enjoy web development because I can combine beautiful designs and
              functional code.
            </p>
          </div>
          <div className="skill__tools">
            <img className="skill__img" src={tools} alt="tools" />
            <h2 className="skill__title--big">Frameworks</h2>
            <h3 className="skill__title--small">React, Express</h3>
            <p className="skill__desc">
              I know that frameworks can enhance web experience as well as help to develop web
              applications efficiently. I am constantly learning various frameworks.
            </p>
          </div>
          <div className="skill__others">
            <img className="skill__img" src={others} alt="others" />
            <h2 className="skill__title--big">Others</h2>
            <h3 className="skill__title--small">Sass, Mysql, MongoDB, Git, Java</h3>
            <p className="skill__desc">
              I am always keen to learn new technologies required to work efficiently.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Skill;
