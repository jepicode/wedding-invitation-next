/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import ImageViewer from 'react-simple-image-viewer';

import SlideShow01 from '../public/slideshow/01.jpg';
import SlideShow02 from '../public/slideshow/02.jpg';
import SlideShow03 from '../public/slideshow/03.jpg';
import SlideShow04 from '../public/slideshow/04.jpg';
import SlideShow05 from '../public/slideshow/05.jpg';
import SlideShow06 from '../public/slideshow/06.jpg';
import SlideShow07 from '../public/slideshow/07.jpg';
import SlideShow08 from '../public/slideshow/08.jpg';
import SlideShow09 from '../public/slideshow/09.jpg';
import SlideShow10 from '../public/slideshow/10.jpg';

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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

  const LIST_IMAGES = [
    {
      id: 1,
      url: SlideShow01
    },
    {
      id: 2,
      url: SlideShow02
    },
    {
      id: 3,
      url: SlideShow03
    },
    {
      id: 4,
      url: SlideShow04
    },
    {
      id: 5,
      url: SlideShow05
    },
    {
      id: 6,
      url: SlideShow06
    },
    {
      id: 7,
      url: SlideShow07
    },
    {
      id: 8,
      url: SlideShow08
    },
    {
      id: 9,
      url: SlideShow09
    },
    {
      id: 10,
      url: SlideShow10
    }
  ];

  return (
    <>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeImageViewer}
        />
      )}
      <div className='tw-max-w-screen sm:tw-w-2/3 tw-mx-auto tw-text-center'>
        <div className='tw-uppercase tw-text-3xl'>Wedding Gallery</div>
        <div className='tw-font-sacramento tw-text-5xl tw-my-4 tw-font-bold'>Our Memories</div>
        <div className='tw-flex tw-flex-wrap tw-text-center tw-justify-center'>
          {LIST_IMAGES.map((image, index) => (
            <Fade duration='1500' triggerOnce key={image.id}>
              <div className='tw-h-64 tw-w-40 tw-relative tw-m-4 tw-shadow-lg tw-rounded-lg' onClick={() => openImageViewer(index)}>
                <Image src={image.url} layout='fill' objectFit='cover' className='tw-rounded-lg' placeholder='blur' />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
}
