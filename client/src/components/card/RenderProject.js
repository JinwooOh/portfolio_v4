import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { projects } from '../static/project_list';
import Project from '../mainpage/Project';

class RenderProject extends React.Component {
  // tag inside of a project
  renderTags = tags => {
    return tags.map((tag, index) => (
      <li className="card__tags--li" key={index}>
        {tag}
      </li>
    ));
  };

  // render projects that a user selects tags
  renderProject = (userTag, index) => {
    if (userTag === 'all') {
      return (
        <React.Fragment key={index}>
          {projects.map((project, i) => (
            <div className="card" key={i}>
              <h2 className="card__title">{project.title}</h2>
              <p className="card__desc">{project.description}</p>
              <div className="card__header--tags">
                {this.renderTags(project.tags)}

                {/* <Link to={`/project/${project.title.replace(/ /g, '')}`}>
                  <button className="btn__card">Show More</button>
                </Link> */}
                <Project project={project} />
              </div>
            </div>
          ))}
        </React.Fragment>
      );
    }
    const result = projects.filter(project => {
      return project.tags.includes(userTag);
    });
    return (
      <React.Fragment key={index}>
        {result.map((project, i) => (
          <div className="card" key={i}>
            <h2 className="card__title">{project.title}</h2>
            <p className="card__desc">{project.description}</p>
            <div className="card__header--tags">
              {this.renderTags(project.tags)}
              {/* <Link to={`/project/${project.title.replace(/ /g, '')}`}>
                <button className="btn__card">Show More</button>
              </Link> */}
              <Project project={project} />
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="renderProject">
        <ul className="renderProject__list">{this.renderProject(this.props.tags)}</ul>
      </div>
    );
  }
}
RenderProject.propTypes = {
  tags: PropTypes.string.isRequired,
};

export default RenderProject;
