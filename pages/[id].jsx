/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';
import {
  FaBriefcaseMedical,
  FaCalendarCheck,
  FaComment,
  FaCopy,
  FaEnvelopeOpenText,
  FaGift,
  FaGithub,
  FaPauseCircle,
  FaPhotoVideo,
  FaPlayCircle
} from 'react-icons/fa';

import Head from 'next/head';
import Image from 'next/image';
import Sound from 'react-sound';
import { Parallax } from 'react-parallax';
import ImageViewer from 'react-simple-image-viewer';
import { useRouter } from 'next/dist/client/router';
import AkadOnly from '../public/akad-only.json';
import AkadResepsi from '../public/akad-resepsi.json';
import ShowTitle from '../public/show-title.json';

export default function Home() {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [soundStatus, setSoundStatus] = useState(Sound.status.STOPPED);
  const [showCover, setShowCover] = useState(true);
  const [showNormal, setShowNormal] = useState(true);
  const [invitationName, setInvitationName] = useState('');
  const [isShowTitle, setShowTitle] = useState(false);
  const [listGreetings, setListGreetings] = useState([]);
  const [isLoadedGreetings, setIsLoadedGreetings] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  if (AkadOnly[id] && !invitationName) {
    setShowNormal(false);
    setInvitationName(AkadOnly[id]);
  } else if (AkadResepsi[id] && !invitationName) {
    setInvitationName(AkadResepsi[id]);
    if (ShowTitle.find((selectedName) => selectedName === AkadResepsi[id])) setShowTitle(true);
  }

  const images = [
    '/slideshow/01.jpg',
    '/slideshow/02.jpg',
    '/slideshow/03.jpg',
    '/slideshow/04.jpg',
    '/slideshow/05.jpg',
    '/slideshow/06.jpg',
    '/slideshow/07.jpg',
    '/slideshow/08.jpg',
    '/slideshow/09.jpg',
    '/slideshow/10.jpg'
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const getGreetings = () => {
    fetch('/api/greetings', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(async (res) => {
      const { data, status } = await res.json();
      if (status) {
        setListGreetings(data);
      }
    }).catch(() => {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isWillCome = null;
    if (confirmation === 'yes') isWillCome = true;
    else if (confirmation === 'no') isWillCome = false;

    fetch('/api/greetings', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, greetings: notes, isWillCome })
    }).then(() => {
      setName('');
      setNotes('');
      setConfirmation('');
      getGreetings();
    });
  };

  if (!isLoadedGreetings) {
    setIsLoadedGreetings(true);
    if (listGreetings && !listGreetings.length) {
      getGreetings();
    }
  }

  return (
    <>
      <Head>
        <title>Wedding Invitation Jepi &amp; Reza</title>
      </Head>
      <Sound url='/song/BeautifulInWhite.mp3' playStatus={soundStatus} />
      <button
        className='tw-fixed tw-bottom-4 tw-right-4 tw-text-3xl tw-z-40'
        type='button'
        onClick={() => {
          setSoundStatus(
            soundStatus === Sound.status.PLAYING ? Sound.status.PAUSED : Sound.status.PLAYING
          );
        }}
      >
        {soundStatus === Sound.status.PLAYING ? <FaPauseCircle /> : <FaPlayCircle />}
      </button>

      <div className={`tw-relative tw-w-screen ${showCover ? 'tw-h-screen' : 'tw-h-0'} tw-bg-main-background tw-duration-1000 tw-left-0 tw-right-0  tw-z-50`}>
        <Image src='/bg-cover.jpg' layout='fill' objectFit='cover' />
        <div className='tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-top-0 tw-z-50 tw-flex tw-bg-black tw-opacity-30' />
        {showCover && (
          <div className='tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-top-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-text-center'>
            <div className='tw-mt-36'>
              <div className='tw-w-full tw-font-sacramento tw-text-5xl tw-font-bold tw-text-shadow-lg tw-text-white'>
                Jepi &amp; Rere
              </div>
              <div className='tw-text-shadow-lg tw-text-white'>
                Kepada Yth.
                <br />
                Bapak/Ibu/Saudra/i
              </div>
              <div className='tw-text-shadow-lg tw-text-lg tw-text-white tw-font-bold tw-font-open-sans tw-underline'>
                {invitationName}
              </div>
              <button type='button' className='tw-text-white tw-border tw-border-white tw-px-4 tw-py-1 tw-rounded tw-my-8' onClick={() => { setSoundStatus(Sound.status.PLAYING); setShowCover(false); }}>
                Buka Undangan
              </button>
            </div>
          </div>
        )}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeImageViewer}
        />
      )}

      {!showCover && (
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
                <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>
                  {invitationName || 'Nama Tamu Undangan'}
                </div>
                <div>Di tempat.</div>
              </div>

              <div className='tw-w-1/2 tw-my-12 tw-mx-auto tw-border-t tw-border-black' />

              <div className='tw-w-1/2 tw-text-center tw-mx-auto tw-my-0 tw-uppercase tw-text-3xl tw-mb-8'>The Wedding Of</div>
              <div className='tw-mx-auto tw-my-0 tw-text-center sm:tw-flex tw-block tw-items-center'>
                <div className='sm:tw-w-1/3'>
                  <div className='tw-font-sacramento tw-text-3xl tw-font-bold'>
                    Jepi Usuluddin
                    {isShowTitle && ', S.T'}
                  </div>
                  <div className='tw-text-sm tw-text-gray-600 tw-mt-4'>
                    Putra dari
                    <br />
                    (Alm.) Aan Muhidin &amp; Sukati
                  </div>
                </div>
                <div className='tw-h-64 tw-w-64 tw-relative tw-m-4 tw-shadow-lg tw-rounded-full tw-mx-auto' onClick={() => openImageViewer(0)}>
                  <Image src='/main-photo.jpg' layout='fill' objectFit='cover' className='tw-rounded-full' />
                </div>
                <div className='sm:tw-w-1/3'>
                  <div className='tw-font-sacramento tw-text-3xl tw-font-bold'>
                    Reza Ayu Pertiwi
                    {isShowTitle && ', S.Farm'}
                  </div>
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

          <div className='tw-max-w-screen-lg tw-my-0 tw-mx-auto'>
            <div className='tw-text-center'>
              <div className='tw-uppercase tw-text-3xl'>
                Bergabunglah
                <br />
                di Moment Spesial Kami
              </div>
              <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>When &amp; Where</div>
            </div>

            <div className={`sm:tw-flex tw-block ${showNormal ? 'tw-justify-between' : 'tw-justify-center'} tw-my-8`}>
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

              {showNormal && (
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
              )}
            </div>
          </div>

          <div className='tw-w-1/2 tw-mt-24 tw-mb-12 tw-mx-auto tw-flex tw-items-center'>
            <div className='tw-w-full tw-border-t tw-border-black' />
            <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
              <FaPhotoVideo className='tw-fill-current tw-text-gray-600' />
            </div>
            <div className='tw-w-full tw-border-t tw-border-black' />
          </div>

          <div className='tw-max-w-screen sm:tw-w-2/3 tw-mx-auto tw-text-center'>
            <div className='tw-uppercase tw-text-3xl'>Wedding Gallery</div>
            <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>Our Memories</div>
            <div className='tw-flex tw-flex-wrap tw-text-center tw-justify-center'>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(0)}>
                <Image src='/slideshow/01.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(1)}>
                <Image src='/slideshow/02.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(2)}>
                <Image src='/slideshow/03.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(3)}>
                <Image src='/slideshow/04.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(4)}>
                <Image src='/slideshow/05.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(5)}>
                <Image src='/slideshow/06.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(6)}>
                <Image src='/slideshow/07.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(7)}>
                <Image src='/slideshow/08.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(8)}>
                <Image src='/slideshow/09.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(9)}>
                <Image src='/slideshow/10.jpg' layout='fill' objectFit='cover' className='tw-rounded-lg' />
              </div>
            </div>
          </div>

          <div className='tw-w-1/2 tw-mt-24 tw-mb-12 tw-mx-auto tw-flex tw-items-center'>
            <div className='tw-w-full tw-border-t tw-border-black' />
            <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
              <FaBriefcaseMedical className='tw-fill-current tw-text-gray-600' />
            </div>
            <div className='tw-w-full tw-border-t tw-border-black' />
          </div>

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

          <div className='tw-w-1/2 tw-mt-24 tw-mb-12 tw-mx-auto tw-flex tw-items-center'>
            <div className='tw-w-full tw-border-t tw-border-black' />
            <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
              <FaGift className='tw-fill-current tw-text-gray-600' />
            </div>
            <div className='tw-w-full tw-border-t tw-border-black' />
          </div>

          {!ShowTitle && (
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
          )}

          <div className='tw-relative'>
            <div className='tw-absolute tw-w-full tw-left-0 tw-overflow-hidden tw-z-10'>
              <svg className='tw-h-20 tw-relative tw-w-full tw-transform tw-w-full' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
                <path className='tw-fill-main-background' d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z' />
              </svg>
            </div>
            <Parallax bgImage='/third-photo.jpg' strength={700} bgImageStyle={{ opacity: '0.5', width: '100%' }} bgStyle={{ backgroundPosition: 'center top' }} bgImageSizes='50%'>
              <div className='tw-w-full sm:tw-w-3/4 tw-mx-auto tw-my-24 sm:tw-my-32 tw-text-center tw-py-4 tw-px-4 sm:tw-p-20 tw-bg-brown tw-bg-opacity-40 tw-rounded-lg tw-shadow-md'>
                <div className='tw-uppercase tw-text-white tw-text-lg sm:tw-text-3xl tw-font-open-sans'>We Love Each Other</div>
                <div className='tw-font-sacramento tw-text-white tw-font-bold tw-text-5xl sm:tw-text-5xl'>Doa Kami</div>
                <div className='tw-text-white tw-text-xl sm-tw-text-3xl tw-w-full sm:tw-w-2/3 tw-mt-12 tw-mx-auto'>اللهم بارِكْ لي في أهلي، وبارِكْ لأهلي فِيَّ، اللهم ارزقْهم مِنِّي، وارزقْني منهم، اللهم اجمع بينَنا ما جمعتَ في خيرٍ، وفرِّق بيننا إذا فرقتَ في خيرٍ</div>
                <div className='tw-text-base sm:tw-text-xl tw-text-white tw-leading-normal tw-mt-6'>“Ya Allah berkahilah kehidupanku dalam keluargaku, juga berkahilah keluargaku dalam hidupku. Ya Allah berikanlah rezeki untuk keluargaku dari ku dan berikanlah rezeki untukku dari keluargaku. Ya Allah kumpulkanlah kami sebagaimana Engkau kumpulkan dalam kebaikan, juga jangan pisahkan kami kecuali dalam perpisahan yang baik.”</div>
              </div>
            </Parallax>
            <div className='tw-absolute tw-w-full tw-left-0 tw--bottom-4 tw-overflow-hidden tw-z-10'>
              <svg className='tw-h-20 tw-relative tw-w-full tw-transform0' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
                <path className='tw-fill-main-background' d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z' />
              </svg>
            </div>
          </div>

          <div className='tw-max-w-screen-lg tw-mt-24 tw-mx-auto tw-flex tw-flex-wrap tw-items-center tw-px-4 sm:tw-px-0'>
            <div className='tw-w-full sm:tw-w-1/2 tw-text-base sm:tw-text-lg tw-text-center sm:tw-pr-4'>
              {showNormal ? (
                <div>
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
                  Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa
                  restu kepada kedua mempelai.
                </div>
              ) : (
                <div>
                  Tanpa mengurangi rasa hormat, dikarenakan situasi pandemi saat ini,
                  tidak memungkinkan bagi kami mengundang Bapak/Ibu/Saudara/i
                  untuk menghadiri pernikahan kami dan memberikan doa restu secara langsung.
                  <br />
                  <br />
                  Teriring permohonan maaf dan ucapan terima kasih yang tulus,
                  semoga Bapak/Ibu/Saudara/i dapat memaklumi kondisi ini,
                  semoga kita semua selalu ada dalam keadaan sehat dan dapat melalui situasi ini
                  dengan sebaik-baiknya.
                </div>
              )}
            </div>
            <div className='tw-w-1/2 tw-border-t sm:tw-hidden tw-border-black tw-my-8 tw-mx-auto' />
            <div className='tw-w-full sm:tw-w-1/2 tw-text-center'>
              <div className='tw-uppercase tw-text-gray-600'>Best Wishes</div>
              <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>Ucapan dan Doa</div>
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Nama' name='name' className='tw-block tw-w-full tw-my-4 tw-p-2 tw-rounded-md' value={name} onChange={(e) => setName(e.target.value)} />
                <textarea placeholder="Berikan Ucapan dan Do'a Restu" name='notes' className='tw-block tw-w-full tw-my-4 tw-p-2 tw-rounded-md tw-resize-none' rows='4' value={notes} onChange={(e) => setNotes(e.target.value)} />
                {showNormal && (
                  <>
                    <label htmlFor='yes' className='tw-text-left tw-text-gray-600 tw-text-sm tw-italic tw-flex tw-items-center'>
                      <input type='radio' value='yes' name='confirmation' id='yes' className='tw-mr-2' checked={confirmation === 'yes'} onChange={(e) => setConfirmation(e.target.value)} />
                      <span>Saya akan datang</span>
                    </label>
                    <label htmlFor='no' className='tw-text-left tw-text-gray-600 tw-text-sm tw-italic tw-flex tw-items-center'>
                      <input type='radio' value='no' name='confirmation' id='no' className='tw-mr-2' checked={confirmation === 'no'} onChange={(e) => setConfirmation(e.target.value)} />
                      <span>Maaf, saya tidak dapat datang</span>
                    </label>
                  </>
                )}
                <button type='submit' className='tw-px-4 tw-py-2 tw-border tw-border-gray-500 tw-w-full tw-mt-4 tw-rounded-lg tw-text-sm'>
                  Kirim Ucapan
                </button>
              </form>
            </div>
          </div>

          <div className='tw-w-1/2 tw-mt-24 tw-mb-12 tw-mx-auto tw-flex tw-items-center'>
            <div className='tw-w-full tw-border-t tw-border-black' />
            <div className='tw-w-1/3 tw-flex tw-justify-center tw-text-gray'>
              <FaComment className='tw-fill-current tw-text-gray-600' />
            </div>
            <div className='tw-w-full tw-border-t tw-border-black' />
          </div>

          <div className='tw-max-w-screen-lg tw-mx-auto tw-h-80 tw-overflow-y-auto'>
            {listGreetings && listGreetings.map((greeting) => (
              <div className='tw-bg-white tw-py-2 tw-px-4 tw-rounded-md tw-shadow-md tw-mb-4 tw-mx-4 sm:tw-mx-0' key={greeting._id}>
                <div className='tw-font-semibold tw-text-sm'>{greeting.name}</div>
                {(greeting.isWillCome || greeting.isWillCome === false) && (
                  <div className='tw-text-gray-600 tw-text-sm'>{greeting.isWillCome ? 'Saya akan datang' : 'Maaf, saya tidak dapat datang'}</div>
                )}
                <div className='tw-mt-2'>{greeting.greetings}</div>
              </div>
            ))}
          </div>

          <div className='tw-text-center tw-my-4'>
            <div className='tw-text-gray-600'>
              Atas doa dan restu dari Bapak/Ibu/Saudara/i, Kami mengucapkan terima kasih
              <br />
              <br />
              Kami yang berbahagia
            </div>
            <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>
              Jepi &amp; Rere
            </div>
          </div>

          <div className='tw-w-full tw-bg-brown tw-mt-16'>
            <div className='tw-max-w-screen-lg tw-mx-auto tw-flex tw-p-4 tw-text-white tw-items-center tw-text-sm'>
              <FaGithub />
              <span className='tw-ml-2'>github.com/jepicode</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
