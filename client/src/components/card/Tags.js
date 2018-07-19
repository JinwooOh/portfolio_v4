import React from 'react';
import PropTypes from 'prop-types';

class Tags extends React.Component {
  handleTagOnClick = tag => {
    this.props.handleTag(tag);
  };
  render() {
    return (
      <div className="tags">
        <button className="btn__tags" onClick={() => this.handleTagOnClick('all')}>
          All
        </button>
        <button className="btn__tags" onClick={() => this.handleTagOnClick('react')}>
          React
        </button>
        <button className="btn__tags" onClick={() => this.handleTagOnClick('javascript')}>
          Javascript
        </button>
        <button className="btn__tags" onClick={() => this.handleTagOnClick('algorithm')}>
          ALGORITHM
        </button>
        <button className="btn__tags" onClick={() => this.handleTagOnClick('express')}>
          EXPRESS
        </button>
        <button className="btn__tags" onClick={() => this.handleTagOnClick('node')}>
          Node
        </button>
        <button className="btn__tags" onClick={() => this.handleTagOnClick('html')}>
          HTML
        </button>
        <button className="btn__tags" onClick={() => this.handleTagOnClick('css')}>
          CSS
        </button>
      </div>
    );
  }
}
Tags.propTypes = {
  handleTag: PropTypes.func.isRequired,
};

export default Tags;
