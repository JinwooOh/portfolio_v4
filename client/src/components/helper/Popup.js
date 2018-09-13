/* eslint react/prop-types: 0 */
import React from 'react';
import Dialog from 'material-ui/Dialog';

const customContentStyle =
  window.screen.availWidth >= 900
    ? {
        maxWidth: '60rem',
      }
    : {
        maxWidth: '40rem',
      };
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class Popup extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div style={customContentStyle.wrapper}>
        <button className="btn__nav" onClick={this.props.handleOpen}>
          Contact
        </button>
        <Dialog
          autoScrollBodyContent
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          contentStyle={customContentStyle}
          overlayStyle={{ backgroundColor: 'rgb(35%, 45%, 51%, 0.7)' }}
        >
          {text}
        </Dialog>
      </div>
    );
  }
}
