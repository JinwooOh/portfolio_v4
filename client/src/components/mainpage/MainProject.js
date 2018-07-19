import React from 'react';
import PropTypes from 'prop-types';
import Tags from '../card/Tags';
import RenderProject from '../card/RenderProject';

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <h2 className="project__heading">Projects</h2>
        <Tags tags={this.props.tags} handleTag={this.props.handleTag} />
        <RenderProject tags={this.props.tags} />
      </div>
    );
  }
}

Project.propTypes = {
  tags: PropTypes.string.isRequired,
  handleTag: PropTypes.func.isRequired,
};
export default Project;
