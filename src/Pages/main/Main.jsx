import React from 'react';
import MainHeader from '../../components/mainHeader/MainHeader';
import MainHero from '../../components/mainHero/mainHero';
import './Main.css'

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
    </>
  );
};

export default Main;
