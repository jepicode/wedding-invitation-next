import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Slide } from 'react-awesome-reveal';

import AkadOnly from '../public/akad-only.json';

const DateInformation = ({ id }) => {
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

      <div className={`sm:tw-flex tw-block ${isShowResepsi ? 'tw-justify-around' : 'tw-justify-center'} tw-my-8`}>
        <Slide direction='up' duration='1500' triggerOnce>
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
        </Slide>

        {isShowResepsi && (
          <Slide direction='down' duration='1500' triggerOnce>
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
          </Slide>
        )}
      </div>

      <div className='tw-mx-auto tw-text-center'>
        <iframe
          title='Map'
          src='https://www.google.com/maps/d/embed?mid=1xVbZWv570OzgPNozsOJib-dM4t9wUOfY'
          width='350'
          height='350'
          style={{ border: 0, margin: '0 auto' }}
          allowFullScreen=''
          loading='lazy'
        />
      </div>
    </div>
  );
};

DateInformation.propTypes = {
  id: PropTypes.string.isRequired
};

export default DateInformation;
