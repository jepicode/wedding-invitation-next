import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

import SpaceWithIcon from './SpaceWithIcon';

import AkadOnly from '../public/akad-only.json';
import AkadResepsi from '../public/akad-resepsi.json';
import ShowTitle from '../public/show-title.json';
import MainPhoto from '../public/main-photo.jpg';

const OutInformation = () => {
  const router = useRouter();
  const { id } = router.query;

  let invitationName;
  let isShowTitle = false;

  if (AkadOnly[id] && !invitationName) {
    invitationName = AkadOnly[id];
  } else if (AkadResepsi[id] && !invitationName) {
    invitationName = AkadResepsi[id];
    if (ShowTitle.find((selectedName) => selectedName === AkadResepsi[id])) {
      isShowTitle = true;
    }
  }
  return (
    <div className='tw-max-w-screen-lg tw-my-0 tw-mx-auto'>
      <div className='tw-font-open-sans'>
        <div className='tw-flex tw-items-center tw-uppercase tw-text-center sm:tw-tracking-widest tw-tracking-wider sm:tw-w-9/12 tw-w-full tw-my-0 tw-mx-auto'>
          <div className='sm-tw-w-1/3 tw-w-1/2'>
            <div className='sm:tw-text-3xl tw-text-2xl'>Jepi</div>
            <div className='sm:tw-text-base tw-text-sm'>Usuluddin</div>
          </div>
          <div className='tw-w-1/3 tw-hidden sm:tw-block tw-border-t tw-border-black tw-px-4' />
          <div className='sm:tw-w-1/3 tw-w-1/2'>
            <div className='sm:tw-text-3xl tw-text-2xl'>Reza</div>
            <div className='sm:tw-text-base tw-text-sm'>Ayu Pertiwi</div>
          </div>
        </div>

        <SpaceWithIcon icon='envelopeOpenText' />

        <div className='tw-w-9/12 tw-mx-auto tw-my-0 tw-text-center'>
          <div>
            Kepada Yth.
            <br />
            Bapak/Ibu/Saudra/i
          </div>
          <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>
            {invitationName || 'Nama Tamu Undangan'}
          </div>
          <div>Di tempat.</div>
        </div>

        <div className='tw-w-1/2 tw-my-12 tw-mx-auto tw-border-t tw-border-black' />

        <div className='tw-w-1/2 tw-text-center tw-mx-auto tw-my-0 tw-uppercase tw-text-3xl tw-mb-8'>The Wedding Of</div>
        <div className='tw-mx-auto tw-my-0 tw-text-center sm:tw-flex tw-block tw-items-center'>
          <div className='sm:tw-w-1/3'>
            <Fade direction='left' triggerOnce>
              <div className='tw-font-sacramento tw-text-3xl tw-font-bold'>
                Jepi Usuluddin
                {isShowTitle && ', S.T'}
              </div>
              <div className='tw-text-sm tw-text-gray-600 tw-mt-4'>
                Putra dari
                <br />
                (Alm.) Aan Muhidin &amp; Sukati
              </div>
            </Fade>
          </div>
          <div className='tw-h-64 tw-w-64 tw-relative tw-m-4 tw-shadow-lg tw-rounded-full tw-mx-auto'>
            <Image src={MainPhoto} layout='fill' objectFit='cover' className='tw-rounded-full' placeholder='blur' />
          </div>
          <div className='sm:tw-w-1/3'>
            <Fade direction='right' triggerOnce>
              <div className='tw-font-sacramento tw-text-3xl tw-font-bold'>
                Reza Ayu Pertiwi
                {isShowTitle && ', S.Farm'}
              </div>
              <div className='tw-text-sm tw-text-gray-600 tw-mt-4'>
                Putri dari
                <br />
                (Alm.) Solikin &amp; Eti Mulyanti
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutInformation;
