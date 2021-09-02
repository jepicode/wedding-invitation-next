import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { Zoom } from 'react-awesome-reveal';
import { useRouter } from 'next/dist/client/router';

import AkadOnly from '../public/akad-only.json';

const DateInformation = () => {
  const router = useRouter();
  const { id } = router.query;

  let isShowResepsi = true;
  if (AkadOnly[id]) isShowResepsi = false;

  return (
    <div className='tw-max-w-screen-lg tw-my-0 tw-mx-auto'>
      <div className='tw-text-center'>
        <div className='tw-uppercase tw-text-3xl'>
          Bergabunglah
          <br />
          di Moment Spesial Kami
        </div>
        <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>When &amp; Where</div>
      </div>

      <div className={`sm:tw-flex tw-block ${isShowResepsi ? 'tw-justify-between' : 'tw-justify-center'} tw-my-8`}>
        <Zoom direction='up' duration='1500'>
          <div className='tw-bg-white sm:tw-m-0 tw-m-4 tw-py-8 tw-px-16 tw-text-center tw-font-open-sans tw-rounded-lg tw-shadow-md'>
            <div className='tw-flex tw-justify-center tw-text-5xl'>
              <FaCalendarCheck className='tw-fill-current tw-text-gray-600' />
            </div>
            <div className='tw-text-2xl tw-my-3'>Akad Nikah</div>
            <div className='tw-text-gray-600'>Jumat, 10 September 2021</div>
            <div className='tw-border-t tw-border-black tw-w-1/3 tw-mx-auto tw-my-8' />
            <div className='tw-text-xl'>Pukul 13.00 WIB</div>
            <div className='tw-text-sm tw-italic'>
              Kp. Pangradin 2 RT 001/RW 005
              <br />
              Desa Pangradin, Kec. Jasinga
              <br />
              Kab. Bogor, Jawa Barat
            </div>
          </div>
        </Zoom>

        {isShowResepsi && (
          <Zoom direction='down' duration='1500'>
            <div className='tw-bg-white sm:tw-m-0 tw-m-4 tw-py-8 tw-px-16 tw-text-center tw-font-open-sans tw-rounded-lg tw-shadow-md'>
              <div className='tw-flex tw-justify-center tw-text-5xl'>
                <FaCalendarCheck className='tw-fill-current tw-text-gray-600' />
              </div>
              <div className='tw-text-2xl tw-my-3'>Resepsi</div>
              <div className='tw-text-gray-600'>Sabtu, 11 September 2021</div>
              <div className='tw-border-t tw-border-black tw-w-1/3 tw-mx-auto tw-my-8' />
              <div className='tw-text-xl'>
                Pukul 12.00
                <span className='tw-text-sm'> s/d </span>
                17.00 WIB
              </div>
              <div className='tw-text-sm tw-italic'>
                Kp. Pangradin 2 RT 001/RW 005
                <br />
                Desa Pangradin, Kec. Jasinga
                <br />
                Kab. Bogor, Jawa Barat
              </div>
            </div>
          </Zoom>
        )}
      </div>
    </div>
  );
};

export default DateInformation;
