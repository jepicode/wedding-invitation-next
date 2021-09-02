import React from 'react';
import Image from 'next/image';

export default function HealthProtocol() {
  return (
    <div className='tw-max-w-screen-lg tw-my-12 tw-mx-auto tw-text-center'>
      <div className='tw-text-3xl tw-font-open-sans'>Kami Menarapkan Protokol Kesehatan</div>
      <div className='tw-flex tw-mt-8 tw-justify-between tw-w-2/3 tw-mx-auto tw-flex-wrap'>
        <div className='tw-w-1/2 sm:tw-w-1/3 tw-mb-4'>
          <Image src='/health-protocol/01.png' width={100} height={100} />
          <span className='tw-block tw-mt-2'>Cuci Tangan</span>
        </div>
        <div className='tw-w-1/2 sm:tw-w-1/3 tw-mb-4'>
          <Image src='/health-protocol/02.png' width={100} height={100} />
          <span className='tw-block tw-mt-2'>Memakai Handsanitizer</span>
        </div>
        <div className='tw-w-1/2 sm:tw-w-1/3 tw-mb-4'>
          <Image src='/health-protocol/03.png' width={100} height={100} />
          <span className='tw-block tw-mt-2'>Menghindari Kerumunan</span>
        </div>
        <div className='tw-w-1/2 sm:tw-w-1/3 tw-mb-4'>
          <Image src='/health-protocol/04.png' width={100} height={100} />
          <span className='tw-block tw-mt-2'>Memakai Masker</span>
        </div>
        <div className='tw-w-1/2 sm:tw-w-1/3 tw-mb-4'>
          <Image src='/health-protocol/05.png' width={100} height={100} />
          <span className='tw-block tw-mt-2'>Tidak Bersalaman</span>
        </div>
        <div className='tw-w-1/2 sm:tw-w-1/3 tw-mb-4'>
          <Image src='/health-protocol/06.png' width={100} height={100} />
          <span className='tw-block tw-mt-2'>Menjaga Jarak</span>
        </div>
      </div>
    </div>
  );
}
