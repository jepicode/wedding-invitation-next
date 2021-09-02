import React from 'react';
import { Parallax } from 'react-parallax';

export default function OurPrayers() {
  return (
    <div className='tw-relative'>
      <div className='tw-absolute tw-w-full tw-left-0 tw-overflow-hidden tw-z-10'>
        <svg className='tw-h-20 tw-relative tw-w-full tw-transform tw-w-full' id='svg' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
          <path className='tw-fill-main-background' d='M0,256L30,234.7C60,213,120,171,180,149.3C240,128,300,128,360,149.3C420,171,480,213,540,224C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,202.7C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z' />
        </svg>
      </div>
      <Parallax bgImage='/third-photo.jpg' strength={700} bgImageStyle={{ opacity: '0.5', width: '100%' }} bgStyle={{ backgroundPosition: 'center top' }} bgImageSizes='50%'>
        <div className='tw-w-full sm:tw-w-3/4 tw-mx-auto tw-my-24 sm:tw-my-32 tw-text-center tw-p-4 md:tw-p-20 tw-bg-brown tw-bg-opacity-40 tw-rounded-lg tw-shadow-md'>
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
  );
}
