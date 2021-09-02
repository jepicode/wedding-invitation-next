import React from 'react';
import PropTypes from 'prop-types';
import {
  FaBriefcaseMedical, FaEnvelopeOpenText, FaGift, FaPhotoVideo
} from 'react-icons/fa';

const SpaceWithIcon = ({ icon }) => {
  const classIcon = 'tw-fill-current tw-text-gray-600';

  const MAPPING_ICON = {
    briefcaseMedical: <FaBriefcaseMedical className={classIcon} />,
    envelopeOpenText: <FaEnvelopeOpenText className={classIcon} />,
    gift: <FaGift className={classIcon} />,
    photoVideo: <FaPhotoVideo className={classIcon} />
  };

  return (
    <div className='tw-w-1/2 tw-mt-24 tw-mb-12 tw-mx-auto tw-flex tw-items-center'>
      <div className='tw-w-full tw-border-t tw-border-black' />
      <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
        {MAPPING_ICON[icon]}
      </div>
      <div className='tw-w-full tw-border-t tw-border-black' />
    </div>
  );
};

SpaceWithIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default SpaceWithIcon;
