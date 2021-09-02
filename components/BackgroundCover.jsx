import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { useRouter } from 'next/dist/client/router';
import AkadOnly from '../public/akad-only.json';
import AkadResepsi from '../public/akad-resepsi.json';

const BackgroundCover = ({ id, openCover, showCover }) => {
  let invitationName;
  const [invitationId, setInvitationId] = useState('');

  const router = useRouter();
  if (id) {
    if (AkadOnly[id]) {
      invitationName = AkadOnly[id];
    } else if (AkadResepsi[id]) {
      invitationName = AkadResepsi[id];
    } else {
      router.push('/');
    }
  }

  const handleOpen = () => {
    if (!id && invitationId) {
      if (!AkadOnly[invitationId] && !AkadResepsi[invitationId]) toast.error('Maaf, Kode Undangan Tidak Terdaftar.');
      else openCover(invitationId);
    } else if (id) {
      openCover();
    } else {
      toast.warn('Harap Isi Kode Undangan Terlebih Dahulu.');
    }
  };

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
              {!id && (
                <>
                  <br />
                  Silahkan Masukkan Kode Undangan
                </>
              )}
            </div>
            {invitationName ? (
              <div className='tw-text-shadow-lg tw-text-lg tw-text-white tw-font-bold tw-font-open-sans tw-underline'>
                {invitationName}
              </div>
            ) : (
              <div>
                <input type='text' value={invitationId} onChange={(e) => setInvitationId(e.target.value)} className='tw-block tw-w-full tw-my-4 tw-p-2 tw-rounded-md' placeholder='Kode Undangan' />
              </div>
            )}
            <button type='button' className='tw-text-white tw-border tw-border-white tw-px-4 tw-py-1 tw-rounded tw-my-8' onClick={handleOpen}>
              Buka Undangan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

BackgroundCover.propTypes = {
  id: PropTypes.string,
  showCover: PropTypes.bool.isRequired,

  openCover: PropTypes.func.isRequired
};

BackgroundCover.defaultProps = {
  id: null
};

export default BackgroundCover;
