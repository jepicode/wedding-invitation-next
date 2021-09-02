/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-awesome-reveal';

const ListGreetings = ({ greetings }) => (
  <Slide direction='down' triggerOnce>
    <div className='tw-max-w-screen-lg tw-mx-auto tw-h-80 tw-overflow-y-auto'>
      {greetings && greetings.map((greeting) => (
        <div className='tw-bg-white tw-py-2 tw-px-4 tw-rounded-md tw-shadow-md tw-mb-4 tw-mx-4 sm:tw-mx-0' key={greeting._id}>
          <div className='tw-font-semibold tw-text-sm'>{greeting.name}</div>
          {(greeting.isWillCome || greeting.isWillCome === false) && (
          <div className='tw-text-gray-600 tw-text-sm'>{greeting.isWillCome ? 'Saya akan datang' : 'Maaf, saya tidak dapat datang'}</div>
          )}
          <div className='tw-mt-2'>{greeting.greetings}</div>
        </div>
      ))}
    </div>
  </Slide>
);

ListGreetings.propTypes = {
  greetings: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListGreetings;
