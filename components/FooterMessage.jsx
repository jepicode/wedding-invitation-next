import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';
import { useRouter } from 'next/dist/client/router';

import { toast } from 'react-toastify';
import AkadOnly from '../public/akad-only.json';

import ListGreetings from './ListGreetings';

const FooterMessage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [listGreetings, setListGreetings] = useState([]);
  const [isLoadedGreetings, setIsLoadedGreetings] = useState(false);
  let isShowInvitedInformation = true;

  if (AkadOnly[id]) isShowInvitedInformation = false;

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
    }).catch(() => {
      toast.error('Failed Getting Messages');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isWillCome = null;
    if (!name || !notes) {
      return toast.warn('Please fill the inputs first');
    }

    if (confirmation === 'yes') isWillCome = true;
    else if (confirmation === 'no') isWillCome = false;

    return fetch('/api/greetings', {
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
      toast.success('Success Send Messages', { position: 'bottom-center' });
    }).catch(() => {
      toast.error('Failed Send Messages, Please try again later.');
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
      <div className='tw-max-w-screen-lg tw-mt-24 tw-mx-auto tw-flex tw-flex-wrap tw-items-center tw-px-4 sm:tw-px-0'>
        <div className='tw-w-full sm:tw-w-1/2 tw-text-base sm:tw-text-lg tw-text-center sm:tw-pr-4'>
          {isShowInvitedInformation ? (
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
            {isShowInvitedInformation && (
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

      <ListGreetings greetings={listGreetings} />

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
    </>
  );
};

export default FooterMessage;
