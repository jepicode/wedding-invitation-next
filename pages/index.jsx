import React, { useState } from 'react';
import {
  FaBriefcaseMedical,
  FaCalendarCheck, FaEnvelopeOpenText, FaGift, FaGithub, FaPhotoVideo
} from 'react-icons/fa';

import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from 'react-parallax';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, notes, confirmation })
    }).then((res) => {
      if (res.status === 200) {
        console.log('Success');
      }
      setName('');
      setNotes('');
      setConfirmation('');
    });
  };

  return (
    <>
      <Head>
        <title>Wedding Invitation Jepi &amp; Reza</title>
      </Head>
      <div className='tw-bg-main-background tw-min-h-screen tw-pt-24'>
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

            <div className='tw-w-1/2 tw-my-12 tw-mx-auto tw-flex tw-items-center'>
              <div className='tw-w-full tw-border-t tw-border-black' />
              <div className='tw-w-1/3 tw-flex tw-justify-center'>
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
            <div className='tw-mx-auto tw-my-0 tw-text-center sm:tw-flex tw-block tw-items-center'>
              <div className='sm:tw-w-1/3'>
                <div className='tw-font-sacramento tw-text-3xl tw-font-bold'>Jepi Usuluddin</div>
                <div className='tw-text-sm tw-text-gray-600 tw-mt-4'>
                  Putra dari
                  <br />
                  (Alm.) Aan Muhidin &amp; Sukati
                </div>
              </div>
              <div className='sm:tw-w-1/3 tw-w-2/3 tw-mx-auto sm:tw-my-0 tw-my-4'>
                <Image src='/main-photo.png' alt='Main Photo' width={500} height={500} />
              </div>
              <div className='sm:tw-w-1/3'>
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
        <div className='tw-relative tw-h-152 tw-my-16'>
          <div className='tw-absolute tw-w-full tw-left-0 tw-overflow-hidden tw-z-10'>
            <svg
              className='tw-h-20 tw-relative tw-w-full tw-transform tw-w-full'
              id='svg'
              viewBox='0 0 1440 400'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
            >
              <path
                className='tw-fill-main-background'
                d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z'
              />
            </svg>
          </div>
          <div className={`tw-h-152 tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-z-0 ${styles.secondPhoto}`} />
          <div className='tw-h-152 sm:tw-w-1/3 sm:tw-p-0 tw-px-4 tw-my-0 tw-mx-auto tw-text-center tw-flex tw-flex-row tw-items-center'>
            <div className='tw-w-full'>
              <div className='tw-text-3xl tw-uppercase tw-tracking-wider'>Save The Date</div>
              <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>Wedding Invitation</div>
              <div className='tw-border-t tw-border-black tw-my-6 sm:tw-w-full tw-w-1/2 tw-mx-auto' />
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
            <svg
              className='tw-h-20 tw-relative tw-w-full tw-transform tw-scale-x-600'
              id='svg'
              viewBox='0 0 1440 400'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='tw-fill-main-background'
                d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
              />
            </svg>
          </div>
        </div>

        <div className='tw-max-w-screen-lg tw-my-0 tw-mx-auto'>
          <div className='tw-text-center'>
            <div className='tw-uppercase tw-text-3xl'>
              Bergabunglah
              <br />
              di Moment Spesial Kami
            </div>
            <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>When &amp; Where</div>
          </div>

          <div className='sm:tw-flex tw-block tw-justify-between tw-my-8'>
            <div className='tw-bg-white sm:tw-m-0 tw-m-4 tw-py-8 tw-px-16 tw-text-center tw-font-open-sans tw-rounded-lg tw-shadow-md'>
              <div className='tw-flex tw-justify-center tw-text-5xl'>
                <FaCalendarCheck className='tw-fill-current tw-text-gray-600' />
              </div>
              <div className='tw-text-2xl tw-my-3'>Akad Nikah</div>
              <div className='tw-text-gray-600'>Jum&apos;at, 10 September 2021</div>
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

            <div className='tw-bg-white sm:tw-m-0 tw-m-4 tw-py-8 tw-px-16 tw-text-center tw-font-open-sans tw-rounded-lg tw-shadow-md'>
              <div className='tw-flex tw-justify-center tw-text-5xl'>
                <FaCalendarCheck className='tw-fill-current tw-text-gray-600' />
              </div>
              <div className='tw-text-2xl tw-my-3'>Resepesi</div>
              <div className='tw-text-gray-600'>Sabtu, 11 September 2021</div>
              <div className='tw-border-t tw-border-black tw-w-1/3 tw-mx-auto tw-my-8' />
              <div className='tw-text-xl'>Pukul 12.00 WIB</div>
              <div className='tw-text-sm tw-italic'>
                Kp. Pangradin 2 RT 001/RW 005
                <br />
                Desa Pangradin, Kec. Jasinga
                <br />
                Kab. Bogor, Jawa Barat
              </div>
            </div>
          </div>
        </div>

        <div className='tw-w-1/2 tw-mt-24 tw-mb-12 tw-mx-auto tw-flex tw-items-center'>
          <div className='tw-w-full tw-border-t tw-border-black' />
          <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
            <FaPhotoVideo className='tw-fill-current tw-text-gray-600' />
          </div>
          <div className='tw-w-full tw-border-t tw-border-black' />
        </div>

        <div className='tw-max-w-screen tw-text-center'>
          <div className='tw-uppercase tw-text-3xl'>
            Wedding Gallery
          </div>
          <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>Our Memories</div>
          <div />
        </div>

        <div className='tw-w-1/2 tw-mt-24 tw-mb-12 tw-mx-auto tw-flex tw-items-center'>
          <div className='tw-w-full tw-border-t tw-border-black' />
          <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
            <FaBriefcaseMedical className='tw-fill-current tw-text-gray-600' />
          </div>
          <div className='tw-w-full tw-border-t tw-border-black' />
        </div>

        <div className='tw-max-w-screen-lg tw-my-12 tw-mx-auto tw-text-center'>
          <div className='tw-text-3xl tw-font-open-sans'>
            Kami Menarapkan Protokol Kesehatan
          </div>
          <div className='tw-flex tw-mt-8 tw-justify-between tw-w-2/3 tw-mx-auto'>
            <div className='tw-w-1/3'>
              <Image src='/health-protocol/01.png' width={100} height={100} />
              <span className='tw-block tw-mt-2'>Cuci Tangan</span>
            </div>
            <div className='tw-w-1/3'>
              <Image src='/health-protocol/02.png' width={100} height={100} />
              <span className='tw-block tw-mt-2'>Memakai Handsanitizer</span>
            </div>
            <div className='tw-w-1/3'>
              <Image src='/health-protocol/03.png' width={100} height={100} />
              <span className='tw-block tw-mt-2'>Menghindari Kerumunan</span>
            </div>
          </div>
          <div className='tw-flex tw-mt-8 tw-justify-between tw-w-2/3 tw-mx-auto'>
            <div className='tw-w-1/3'>
              <Image src='/health-protocol/04.png' width={100} height={100} />
              <span className='tw-block tw-mt-2'>Memakai Masker</span>
            </div>
            <div className='tw-w-1/3'>
              <Image src='/health-protocol/05.png' width={100} height={100} />
              <span className='tw-block tw-mt-2'>Tidak Bersalaman</span>
            </div>
            <div className='tw-w-1/3'>
              <Image src='/health-protocol/06.png' width={100} height={100} />
              <span className='tw-block tw-mt-2'>Menjaga Jarak</span>
            </div>
          </div>
        </div>

        <div className='tw-w-1/2 tw-mt-24 tw-mb-12 tw-mx-auto tw-flex tw-items-center'>
          <div className='tw-w-full tw-border-t tw-border-black' />
          <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
            <FaGift className='tw-fill-current tw-text-gray-600' />
          </div>
          <div className='tw-w-full tw-border-t tw-border-black' />
        </div>

        <div className='tw-w-1/2 tw-my-12 tw-mx-auto tw-text-center tw-text-lg'>
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
          <br />
          <br />
          Dan jika memberi adalah ungkapan tanda kasih Anda,
          Anda dapat memberi kado secara cashless.
          <br />
          <br />
          <button type='button' className='tw-text-base tw-border tw-border-gray-500 tw-px-4 tw-py-2 tw-rounded-lg tw-shadow-sm' onClick={() => alert('test')}>Buka Disini</button>
        </div>

        <div className='tw-relative'>
          <div className='tw-absolute tw-w-full tw-left-0 tw-overflow-hidden tw-z-10'>
            <svg
              className='tw-h-20 tw-relative tw-w-full tw-transform tw-w-full'
              id='svg'
              viewBox='0 0 1440 400'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
            >
              <path
                className='tw-fill-main-background'
                d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z'
              />
            </svg>
          </div>
          <Parallax bgImage='/third-photo.jpg' strength={700} bgImageStyle={{ opacity: '0.5', width: '100%' }} bgStyle={{ backgroundPosition: 'center top' }} bgImageSizes='50%'>
            <div className='tw-w-3/4 tw-mx-auto tw-my-32 tw-text-center tw-p-20 tw-bg-brown tw-bg-opacity-40 tw-rounded-lg tw-shadow-md'>
              <div className='tw-uppercase tw-text-white tw-text-3xl tw-font-open-sans'>We Love Each Other</div>
              <div className='tw-font-sacramento tw-text-white tw-font-bold tw-text-5xl'>Do&apos;a Kami</div>
              <div className='tw-text-white tw-text-3xl tw-w-2/3 tw-mt-12 tw-mx-auto'>
                اللهم بارِكْ لي في أهلي، وبارِكْ لأهلي فِيَّ، اللهم ارزقْهم مِنِّي، وارزقْني منهم،
                اللهم اجمع بينَنا ما جمعتَ في خيرٍ، وفرِّق بيننا
                إذا فرقتَ في خيرٍ
              </div>
              <div className='tw-text-xl tw-text-white tw-leading-normal tw-mt-6'>
                “Ya Allah berkahilah kehidupanku dalam keluargaku,
                juga berkahilah keluargaku dalam hidupku.
                Ya Allah berikanlah rezeki untuk keluargaku dari ku dan
                berikanlah rezeki untukku dari keluargaku.
                Ya Allah kumpulkanlah kami sebagaimana Engkau kumpulkan dalam
                kebaikan, juga jangan pisahkan kami kecuali dalam perpisahan yang baik.”
              </div>
            </div>
          </Parallax>
          <div className='tw-absolute tw-w-full tw-left-0 tw--bottom-4 tw-overflow-hidden tw-z-10'>
            <svg
              className='tw-h-20 tw-relative tw-w-full tw-transform0'
              id='svg'
              viewBox='0 0 1440 400'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
            >
              <path
                className='tw-fill-main-background'
                d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
              />
            </svg>
          </div>
        </div>

        <div className='tw-max-w-screen-lg tw-mt-24 tw-mx-auto tw-flex tw-items-center'>
          <div className='tw-w-1/2 tw-text-lg tw-text-center tw-pr-4'>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua
            mempelai. Atas kehadiran serta doa restu, kami ucapkan terima kasih.
          </div>
          <div className='tw-w-1/2 tw-text-center'>
            <div className='tw-text-2xl'>Berikan Ucapan / Do&apos;a</div>
            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Nama' name='name' className='tw-block tw-w-full tw-my-4 tw-p-2 tw-rounded-md' value={name} onChange={(e) => setName(e.target.value)} />
              <textarea placeholder='Berikan Ucapan dan Do&apos;a Restu' name='notes' className='tw-block tw-w-full tw-my-4 tw-p-2 tw-rounded-md tw-resize-none' rows='4' value={notes} onChange={(e) => setNotes(e.target.value)} />
              <label htmlFor='yes' className='tw-text-left tw-text-gray-600 tw-text-sm tw-italic tw-flex tw-items-center'>
                <input type='radio' value='yes' name='confirmation' id='yes' className='tw-mr-2' checked={confirmation === 'yes'} onChange={(e) => setConfirmation(e.target.value)} />
                <span>Saya akan datang</span>
              </label>
              <label htmlFor='no' className='tw-text-left tw-text-gray-600 tw-text-sm tw-italic tw-flex tw-items-center'>
                <input type='radio' value='no' name='confirmation' id='no' className='tw-mr-2' checked={confirmation === 'no'} onChange={(e) => setConfirmation(e.target.value)} />
                <span>Maaf, saya tidak dapat datang</span>
              </label>
              <button type='submit' className='tw-px-4 tw-py-2 tw-border tw-border-gray-500 tw-w-full tw-mt-4 tw-rounded-lg tw-text-sm'>Kirim Ucapan</button>
            </form>
          </div>
        </div>

        <div className='tw-w-full tw-bg-brown tw-mt-16'>
          <div className='tw-max-w-screen-lg tw-mx-auto tw-flex tw-p-4 tw-text-white tw-items-center tw-text-sm'>
            <FaGithub />
            <span className='tw-ml-2'>github.com/jepicode</span>
          </div>
        </div>
      </div>
    </>
  );
}
