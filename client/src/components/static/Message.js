import React from 'react';
import { loveMail } from '../helper/svgList.js';
// contact dialog
export function contact(handleContact, handleSubmit, handleClose, invalid, init, name) {
  return (
    <div>
      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <h1 className="contact__header">{loveMail()}Contact </h1>

        <label className="contact__label" htmlFor="name">
          Name
        </label>
        <input
          className="contact__input"
          onChange={handleContact}
          type="text"
          id="name"
          name="name"
          required
        />

        <label className="contact__label" htmlFor="email">
          Email
        </label>
        <input
          className="contact__input"
          onChange={handleContact}
          type="email"
          id="email"
          name="email"
          required
        />

        <label className="contact__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contact__input contact__input--textarea"
          onChange={handleContact}
          id="message"
          name="message"
          rows="5"
          required
        />
        <div className="contact__btn">
          <button className="contact__submit" type="submit">
            Submit
          </button>
          <button className="contact__close" onClick={handleClose} type="button">
            Close
          </button>
        </div>
      </form>
      <div className="contact__info">
        {invalid && (
          <div>
            <h3>Please fill the required fields.</h3>
          </div>
        )}
        {!invalid &&
          !init && (
            <div>
              <h3>Thank you {name}. Your message is sent.</h3>
            </div>
          )}
      </div>
    </div>
  );
}
