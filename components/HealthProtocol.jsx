import React from 'react';
import Image from 'next/image';
import { Flip } from 'react-awesome-reveal';

import Protocol01 from '../public/health-protocol/01.png';
import Protocol02 from '../public/health-protocol/02.png';
import Protocol03 from '../public/health-protocol/03.png';
import Protocol04 from '../public/health-protocol/04.png';
import Protocol05 from '../public/health-protocol/05.png';
import Protocol06 from '../public/health-protocol/06.png';

export default function HealthProtocol() {
  const LIST_IMAGE = [
    {
      id: 1,
      url: Protocol01,
      label: 'Cuci Tangan'
    },
    {
      id: 2,
      url: Protocol02,
      label: 'Pakai Handsanitizer'
    },
    {
      id: 3,
      url: Protocol03,
      label: 'Tidak Berkerumun'
    },
    {
      id: 4,
      url: Protocol04,
      label: 'Memakai Masker'
    },
    {
      id: 5,
      url: Protocol05,
      label: 'Tidak Bersalaman'
    },
    {
      id: 6,
      url: Protocol06,
      label: 'Menjaga Jarak'
    }
  ];

  return (
    <div className='tw-max-w-screen-lg tw-my-12 tw-mx-auto tw-text-center'>
      <div className='tw-text-3xl tw-font-open-sans'>Kami Menarapkan Protokol Kesehatan</div>
      <div className='tw-flex tw-mt-8 tw-justify-between tw-w-2/3 tw-mx-auto tw-flex-wrap'>
        {LIST_IMAGE.map((image) => (
          <div className='tw-w-1/2 sm:tw-w-1/3 tw-mb-4' key={image.id}>
            <Flip triggerOnce>
              <div className='tw-w-24 tw-h-24'>
                <Image src={image.url} layout='fill' objectFit='contain' loading='eager' />
              </div>
            </Flip>
            <span className='tw-block tw-mt-2'>{image.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
