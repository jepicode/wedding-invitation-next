/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import ImageViewer from 'react-simple-image-viewer';

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
    </>
  );
}
