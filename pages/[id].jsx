import { useRouter } from 'next/dist/client/router';
import React from 'react';

import MainPage from '../components/MainPage';

const Home = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainPage id={id} />
  );
};

export default Home;
