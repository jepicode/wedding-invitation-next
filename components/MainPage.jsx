import React, { useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

import Gallery from './Gallery';
import HealthProtocol from './HealthProtocol';

import DateInformation from './DateInformation';
import FooterMessage from './FooterMessage';
import OurPrayers from './OurPrayers';
import SpaceWithIcon from './SpaceWithIcon';
import DigitalPocket from './DigitalPocket';
import OurInvitation from './OurInvitation';
import OurInformation from './OurInformation';
import BackgroundCover from './BackgroundCover';
import Footer from './Footer';
import ButtonAudio from './ButtonAudio';

const MainPage = ({ id }) => {
  const [soundStatus, setSoundStatus] = useState(Sound.status.STOPPED);
  const [showCover, setShowCover] = useState(true);
  const [invitationId, setInvitationId] = useState(null);

  if (!invitationId && id) setInvitationId(id);

  const openCover = (newId) => {
    if (newId) {
      setInvitationId(newId);
    }
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
      <Sound url='/song/BeautifulInWhite.mp3' playStatus={soundStatus} />
      <ButtonAudio
        isPlaying={soundStatus === Sound.status.PLAYING}
        togglePlayingMusic={togglePlayingMusic}
      />

      <BackgroundCover id={invitationId} openCover={openCover} showCover={showCover} />
      {!showCover && (
        <div className='tw-bg-main-background tw-min-h-screen tw-pt-24'>
          <OurInformation id={invitationId} />
          <OurInvitation />
          <DateInformation id={invitationId} />
          <SpaceWithIcon icon='photoVideo' />
          <Gallery />
          <SpaceWithIcon icon='briefcaseMedical' />
          <HealthProtocol />
          <SpaceWithIcon icon='gift' />
          <DigitalPocket id={invitationId} />
          <OurPrayers />
          <FooterMessage id={invitationId} />
          <Footer />
        </div>
      )}
    </>
  );
};

MainPage.propTypes = {
  id: PropTypes.string
};

MainPage.defaultProps = {
  id: null
};

export default MainPage;
