import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import Popup from './helper/Popup';
import { contact } from './static/Message';
import logo from '../img/logo.png';
import { backArrow } from './helper/svgList';
import resume from './static/Resume_JinwooOh.pdf';

class Nav extends React.Component {
  state = {
    open: false,
    resumeOpen: false,
    pageNumber: 1,
  };

  // contact page popup
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.handleResetInvalid();
  };

  transitionSlide = props => {
    return <Slide direction="right" {...props} />;
  };

  // resume page dialog
  handleResumeOpen = () => {
    this.setState({ resumeOpen: true });
  };

  handleResumeClose = () => {
    this.setState({ resumeOpen: false });
  };

  render() {
    const { pageNumber } = this.state;
    const { availWidth } = window.screen;
    return (
      <div className="container__nav">
        <nav className="nav">
          <div className="nav__logo-box">
            <img className="nav__logo" src={logo} alt="logo" />
          </div>
          <div className="nav__container">
            <button className="btn__nav" onClick={this.handleResumeOpen}>
              Resume
            </button>
            <Dialog
              fullScreen
              open={this.state.resumeOpen}
              onClose={this.handleResumeClose}
              TransitionComponent={this.transitionSlide}
              scroll="paper"
            >
              <nav className="nav">
                <button className="btn__backArrow" onClick={this.handleResumeClose}>
                  {backArrow()}
                </button>
              </nav>

              <DialogContent style={{ paddingTop: '6rem' }}>
                <div className="resume">
                  <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page scale={availWidth > 900 ? '1.4' : '0.65'} pageNumber={pageNumber} />
                  </Document>
                </div>
                <div className="resume__buttom">
                  <a href={resume} className="btn__backArrow" download>
                    Download Resume
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            <MuiThemeProvider>
              <Popup
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                text={contact(
                  this.props.handleContact,
                  this.props.handleSubmit,
                  this.handleClose,
                  this.props.invalid,
                  this.props.init,
                  this.props.name
                )}
              />
            </MuiThemeProvider>
            <button className="btn__nav">
              <a rel="noopener noreferrer" target="_blank" href="https://jinwoocode.com/">
                Blog
              </a>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
Nav.propTypes = {
  handleContact: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  init: PropTypes.bool.isRequired,
  handleResetInvalid: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Nav;
