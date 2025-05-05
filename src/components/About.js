import React from 'react';
import PropTypes from 'prop-types';
import './summary.css';

export default function About(props) {
  return (
    // <div className={`summary-container mrg text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode==='light' ? 'grey' : '#2d2b2b'}`}>
    <div className={`summary-container mrg ${props.mode === 'light' ? 'light-mode' : 'dark-mode'}`}>
      <h1>About TextUtils</h1>
      <p>
        TextUtils is a versatile web application built with React to help you analyze and manipulate text.
        Key features include:
      </p>
      <ul>
        <li>Converting text to uppercase or lowercase</li>
        <li>Reversing text</li>
        <li>Text-to-speech functionality</li>
        <li>Copying text to the clipboard</li>
        <li>Word and character count with reading time estimation</li>
      </ul>
      <p>
        The app supports three themes: Default (our custom look), Light, and Dark, which you can switch
        using the navbar dropdown. Enjoy a seamless and user-friendly experience!
      </p>
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.string.isRequired,
};