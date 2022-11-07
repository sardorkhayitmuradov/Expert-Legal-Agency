import React from 'react';
import MainHeader from '../../components/mainHeader/MainHeader';
import Footer from '../../components/Footer/Footer';
import MainAside from '../../components/MainAside/MainAside';
import MainService from '../../components/mainService/MainService';

const Main = () => {
  return (
    <>
      <header className='header'>
        <MainHeader />
      </header>
      <main className='main'>
        
      </main>

      <div className='service'>
      <MainService/>
      </div>
      <aside className='aside'>
        <MainAside/>
      </aside>
      <footer className='footer'>
    <Footer/>
      </footer>
    </>
  );
};

export default Main;
