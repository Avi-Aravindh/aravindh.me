import { React, useEffect } from 'react';

import { initGA, logPageView } from '../utils/analytics';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [children]);

  return (
    <div className='flex flex-col min-h-screen bg-gray'>
      <Header />
      <div className='bg-gray flex-grow flex justify-center items-center'>
        {children}
      </div>
      <Footer className='bottom-0 sticky' />
    </div>
  );
}
