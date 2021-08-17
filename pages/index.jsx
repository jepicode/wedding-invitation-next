import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wedding Invitation Jepi &amp; Reza</title>
      </Head>
      <div className='tw-bg-main-background tw-min-h-screen'>
        <div className='tw-max-w-screen-lg tw-my-0 tw-mx-auto'>
          <div className='tw-font-open-sans'>
            <div className='tw-flex tw-items-center tw-uppercase tw-text-center tw-tracking-widest tw-w-9/12 tw-my-0 tw-mx-auto'>
              <div className='tw-w-1/3'>
                <div className='tw-text-3xl'>Jepi</div>
                <div>Usuluddin</div>
              </div>
              <div className='tw-w-1/3 tw-border-t tw-border-black tw-px-4' />
              <div className='tw-w-1/3'>
                <div className='tw-text-3xl'>Reza</div>
                <div>Ayu Pertiwi</div>
              </div>
            </div>

            <div className='tw-w-1/2 tw-my-12 tw-mx-auto tw-flex tw-items-center'>
              <div className='tw-w-full tw-border-t tw-border-black' />
              <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
                <FaEnvelopeOpenText className='tw-fill-current tw-text-gray-600' />
              </div>
              <div className='tw-w-full tw-border-t tw-border-black' />
            </div>

            <div className='tw-w-9/12 tw-mx-auto tw-my-0 tw-text-center'>
              <div>
                Kepada Yth.
                <br />
                Bapak/Ibu/Saudra/i
              </div>
              <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>Nama Tamu Undangan</div>
              <div>Di tempat.</div>
            </div>

            <div className='tw-w-1/2 tw-my-12 tw-mx-auto tw-border-t tw-border-black' />

            <div className='tw-w-1/2 tw-text-center tw-mx-auto tw-my-0 tw-uppercase tw-text-3xl tw-mb-8'>The Wedding Of</div>
            <div className='tw-mx-auto tw-my-0 tw-text-center tw-flex tw-items-center'>
              <div className='tw-w-1/3'>
                <div className='tw-font-sacramento tw-text-3xl tw-font-bold'>Jepi Usuluddin</div>
                <div className='tw-text-sm tw-text-gray-600 tw-mt-4'>
                  Putra dari
                  <br />
                  (Alm.) Aan Muhidin &amp; Sukati
                </div>
              </div>
              <div className='tw-w-1/3'>
                <Image src='/main-photo.png' alt='Main Photo' width={500} height={500} />
              </div>
              <div className='tw-w-1/3'>
                <div className='tw-font-sacramento tw-text-3xl tw-font-bold'>Reza Ayu Pertiwi</div>
                <div className='tw-text-sm tw-text-gray-600 tw-mt-4'>
                  Putri dari
                  <br />
                  (Alm.) Solikin &amp; Eti Mulyanti
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tw-relative tw-h-128 tw-my-8'>
          <div className='tw-absolute tw-w-full tw-left-0 tw-overflow-hidden tw-z-10'>
            <svg className='tw-h-20 tw-relative tw-w-full tw-transform tw-scale-x-600' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg'>
              <path className='tw-fill-main-background' d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z' />
            </svg>
          </div>
          <div className={`tw-h-128 tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-z-0 ${styles.secondPhoto}`} />
          <div className='tw-h-128 tw-w-1/3 tw-my-0 tw-mx-auto tw-text-center tw-flex tw-flex-row tw-items-center'>
            <div className='tw-w-full'>
              <div className='tw-text-3xl tw-uppercase tw-tracking-wider'>Save The Date</div>
              <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>Wedding Invitation</div>
              <div className='tw-border-t tw-border-black tw-my-6' />
              <div className='tw-text-lg tw-font-open-sans'>
                Kami akan menikah,
                <br />
                dan kami ingin Anda menjadi bagian dari
                <br />
                hari istimewa kami!
              </div>
            </div>
          </div>
          <div className='tw-absolute tw-w-full tw-left-0 tw--bottom-4 tw-overflow-hidden tw-z-10'>
            <svg className='tw-h-20 tw-relative tw-w-full tw-transform tw-scale-x-600' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg'>
              <path className='tw-fill-main-background' d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z' />
            </svg>
          </div>
        </div>
        test
      </div>
    </>
  );
}
