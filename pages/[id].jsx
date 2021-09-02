import React, { useState } from 'react';
import Head from 'next/head';
import Sound from 'react-sound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Gallery from '../components/Gallery';
import HealthProtocol from '../components/HealthProtocol';

import DateInformation from '../components/DateInformation';
import FooterMessage from '../components/FooterMessage';
import OurPrayers from '../components/OurPrayers';
import SpaceWithIcon from '../components/SpaceWithIcon';
import DigitalPocket from '../components/DigitalPocket';
import OurInvitation from '../components/OurInvitation';
import OurInformation from '../components/OurInformation';
import BackgroundCover from '../components/BackgroundCover';
import Footer from '../components/Footer';
import ButtonAudio from '../components/ButtonAudio';

export default function Home() {
  const [soundStatus, setSoundStatus] = useState(Sound.status.STOPPED);
  const [showCover, setShowCover] = useState(true);

  const openCover = () => {
    setSoundStatus(Sound.status.PLAYING);
    setShowCover(false);
  };

  const togglePlayingMusic = () => {
    const isPlaying = Sound.status.PLAYING;
    setSoundStatus(isPlaying ? Sound.status.PAUSED : Sound.status.PLAYING);
  };

  return (
    <>
      <Head>
        <title>Wedding Invitation Jepi &amp; Reza</title>
      </Head>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Sound url='/song/BeautifulInWhite.mp3' playStatus={soundStatus} />
      <ButtonAudio
        isPlaying={soundStatus === Sound.status.PLAYING}
        togglePlayingMusic={togglePlayingMusic}
      />

      <BackgroundCover openCover={openCover} showCover={showCover} />
      {!showCover && (
        <div className='tw-bg-main-background tw-min-h-screen tw-pt-24'>
          <OurInformation />
          <OurInvitation />
          <DateInformation />
          <SpaceWithIcon icon='photoVideo' />
          <Gallery />
          <SpaceWithIcon icon='briefcaseMedical' />
          <HealthProtocol />
          <SpaceWithIcon icon='gift' />
          <DigitalPocket />
          <OurPrayers />
          <FooterMessage />
          <Footer />
        </div>
      )}
    </>
  );
}
