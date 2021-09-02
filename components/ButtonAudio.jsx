import React from 'react';
import PropTypes from 'prop-types';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const ButtonAudio = ({ isPlaying, togglePlayingMusic }) => (
  <button
    className='tw-fixed tw-bottom-4 tw-right-4 tw-text-3xl tw-z-40'
    type='button'
    onClick={togglePlayingMusic}
  >
    {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
  </button>
);

ButtonAudio.propTypes = {
  isPlaying: PropTypes.bool.isRequired,

  togglePlayingMusic: PropTypes.func.isRequired
};

export default ButtonAudio;
