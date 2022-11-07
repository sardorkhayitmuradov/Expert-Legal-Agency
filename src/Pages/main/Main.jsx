import React from 'react';
import MainHeader from '../../components/mainHeader/MainHeader';
import MainHero from '../../components/mainHero/mainHero';
import './Main.css'
import Footer from '../../components/Footer/Footer';
import MainAside from '../../components/MainAside/MainAside';

const Main = () => {
  return (
    <>
      <header className='header'>
        <MainHeader />
      </header>
      <main className='main'>
        <section className="hero">
          <div className="hero-container">
            <MainHero />
          </div>
        </section>
      </main>

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
