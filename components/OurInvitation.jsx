import Image from 'next/image';
import React from 'react';

export default function OurInvitation() {
  return (
    <div className='tw-relative tw-h-152 tw-my-16'>
      <div className='tw-absolute tw-w-full tw-left-0 tw-overflow-hidden tw-z-10'>
        <svg className='tw-h-20 tw-relative tw-w-full tw-transform tw-w-full' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
          <path className='tw-fill-main-background' d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z' />
        </svg>
      </div>
      <div className='tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-z-0'>
        <Image src='/second-photo.jpg' layout='fill' objectFit='cover' objectPosition='center top' />
      </div>
      <div className='tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-z-0 tw-bottom-0 tw-bg-black tw-opacity-20' />
      <div className='tw-h-152 sm:tw-w-1/3 sm:tw-p-0 tw-px-4 tw-mx-auto tw-text-center tw-absolute tw-inset-0'>
        <div className='tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-mx-auto'>
          <div className='tw-w-full tw-text-white'>
            <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>Wedding Invitation</div>
            <div className='tw-border-t tw-border-white tw-my-6 sm:tw-w-full tw-w-1/2 tw-mx-auto' />
            <div className='tw-font-open-sans'>
              Dengan memohon Rahmat dan Ridho Allah SWT,
              <br />
              <br />
              Kami bermaksud melangsungkan pernikahan, izinkan kami untuk berbagi
              kebahagiaan di hari istimewa kami
            </div>
          </div>
        </div>
      </div>
      <div className='tw-absolute tw-w-full tw-left-0 tw--bottom-4 tw-overflow-hidden tw-z-10'>
        <svg className='tw-h-20 tw-relative tw-w-full tw-transform tw-w-full' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
          <path className='tw-fill-main-background' d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z' />
        </svg>
      </div>
    </div>
  );
}
