import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import Popup from './helper/Popup';
import { contact } from './static/Message';
import logo from './../img/logo.png';

class Nav extends React.Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.handleResetInvalid();
  };
  render() {
    return (
      <div className="container__nav">
        <nav className="nav">
          <div className="nav__logo-box">
            <img className="nav__logo" src={logo} alt="logo" />
            {/* <svg
              className="nav__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z" />
            </svg> */}

            {/* <span className="nav__logo">Logo</span> */}
          </div>

          <div className="nav__icon-box">
            {/* <a href="/about" className="nav__about">
              About
            </a> */}

            <MuiThemeProvider>
              <div className="">
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
              </div>
            </MuiThemeProvider>
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
