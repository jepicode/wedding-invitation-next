import React from 'react';
import { FaCopy } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

import AkadResepsi from '../public/akad-resepsi.json';
import ShowTitle from '../public/show-title.json';

const DigitalPocket = () => {
  const router = useRouter();
  const { id } = router.query;
  let isShowDigitalPocket = true;

  if (AkadResepsi[id] && ShowTitle.find((selectedName) => selectedName === AkadResepsi[id])) {
    isShowDigitalPocket = false;
  }

  if (isShowDigitalPocket) {
    return (
      <div className='tw-w-full tw-px-4 sm:tw-p-0 sm:tw-w-1/2 tw-my-12 tw-mx-auto tw-text-center sm:tw-text-lg'>
        <div className='tw-my-4'>
          Tanpa mengurangi rasa hormat, bagi keluarga, sahabat dan rekan yang ingin
          memberikan tanda kasih untuk kami, dapat melalui :
        </div>
        <div className='tw-mt-8 tw-flex'>
          <div className='tw-w-1/2'>
            <Image src='/bank/bca.png' width='150' height='48' />
            <button type='button' className='tw-text-bold tw-flex tw-justify-center tw-w-full tw-items-center' title='Copy' onClick={() => navigator.clipboard.writeText('4660058899')}>
              4660058899
              <FaCopy className='tw-ml-2 tw-fill-current tw-text-gray-600 tw-text-sm' />
            </button>
            <div className='tw-text-sm'>a/n Reza Ayu Pertiwi</div>
          </div>
          <div className='tw-w-1/2'>
            <Image src='/bank/mandiri.png' width='150' height='48' />
            <button type='button' className='tw-text-bold tw-flex tw-justify-center tw-w-full tw-items-center' title='Copy' onClick={() => navigator.clipboard.writeText('1180010569068')}>
              1180010569068
              <FaCopy className='tw-ml-2 tw-fill-current tw-text-gray-600 tw-text-sm' />
            </button>
            <div className='tw-text-sm'>a/n Jepi Usuluddin</div>
          </div>
        </div>
      </div>
    );
  }

  return <div />;
};

export default DigitalPocket;
