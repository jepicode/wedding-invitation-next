import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';

import AkadOnly from '../public/akad-only.json';
import AkadResepsi from '../public/akad-resepsi.json';

const BackgroundCover = ({ openCover, showCover }) => {
  let invitationName;

  const router = useRouter();
  const { id } = router.query;
  if (AkadOnly[id]) {
    invitationName = AkadOnly[id];
  } else if (AkadResepsi[id]) {
    invitationName = AkadResepsi[id];
  }

  return (
    <div className={`tw-relative tw-w-screen ${showCover ? 'tw-h-screen' : 'tw-h-0'} tw-bg-main-background tw-duration-1000 tw-left-0 tw-right-0  tw-z-50`}>
      <Image src='/bg-cover.jpg' layout='fill' objectFit='cover' />
      <div className='tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-top-0 tw-z-50 tw-flex tw-bg-black tw-opacity-30' />
      {showCover && (
        <div className='tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-top-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-text-center'>
          <div className='tw-mt-36'>
            <div className='tw-w-full tw-font-sacramento tw-text-5xl tw-font-bold tw-text-shadow-lg tw-text-white'>
              Jepi &amp; Rere
            </div>
            <div className='tw-text-shadow-lg tw-text-white'>
              Kepada Yth.
              <br />
              Bapak/Ibu/Saudra/i
            </div>
            <div className='tw-text-shadow-lg tw-text-lg tw-text-white tw-font-bold tw-font-open-sans tw-underline'>
              {invitationName}
            </div>
            <button type='button' className='tw-text-white tw-border tw-border-white tw-px-4 tw-py-1 tw-rounded tw-my-8' onClick={openCover}>
              Buka Undangan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

BackgroundCover.propTypes = {
  showCover: PropTypes.bool.isRequired,

  openCover: PropTypes.func.isRequired
};

export default BackgroundCover;
