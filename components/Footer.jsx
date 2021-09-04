import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='tw-w-full tw-bg-brown tw-mt-16'>
      <div className='tw-max-w-screen-lg tw-mx-auto tw-flex tw-p-4 tw-text-white tw-items-center tw-text-sm'>
        <FaGithub />
        <span className='tw-ml-2'>github.com/jepicode/wedding-invitation-next</span>
      </div>
    </div>
  );
}
