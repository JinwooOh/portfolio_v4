import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { githubFill, backArrow, demoPlay } from '../helper/svgList.js';

class Project extends React.Component {
  state = {
    open: false,
  };
  transitionSlide = props => {
    return <Slide direction="right" {...props} />;
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <button className="btn__card" onClick={this.handleClickOpen}>
          Show More
        </button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.transitionSlide}
          scroll="paper"
        >
          <div className="container__nav">
            <nav className="nav">
              <button className="btn__backArrow" onClick={this.handleClose}>
                {backArrow()}
              </button>
            </nav>
          </div>

          <DialogContent style={{ padding: 0 }}>
            <img
              className="desc__img"
              src={this.props.project.imgUrl}
              alt={this.props.project.title}
            />
            <div className="desc__container--bg">
              <div className="desc__container--desc">
                <h2 className="desc__title">
                  {this.props.project.title}
                  <a
                    className="desc__github"
                    href={this.props.project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {githubFill()}
                  </a>
                  {this.props.project.demo === '' ? (
                    ''
                  ) : (
                    <a
                      className="desc__demoPlay"
                      href={this.props.project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {demoPlay()}
                    </a>
                  )}
                </h2>

                {this.props.project.tags.map((tag, index) => (
                  <li className="desc__tags" key={index}>
                    {tag}
                  </li>
                ))}

                <p className="desc__desc">{this.props.project.description}</p>
                {this.props.project.html}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
