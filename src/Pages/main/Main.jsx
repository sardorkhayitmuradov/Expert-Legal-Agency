import React from 'react';
import MainHeader from '../../components/mainHeader/MainHeader';
import MainHero from '../../components/mainHero/mainHero';
import Footer from '../../components/Footer/Footer';
import MainAside from '../../components/MainAside/MainAside';
import MainOrder from '../../components/mainOrder/mainOrder';
import MainRating from '../../components/mainRating/mainRating';
import './Main.css'
import MainFaceRating from '../../components/mainFaceRating/mainFaceRating';

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
        <section className="order">
          <div className="order-container">
            <MainOrder />
          </div>
        </section>
        <section className="rating">
          <div className="rating-container">
            <MainRating />
          </div>
        </section>
        <section className="rating">
          <div className="rating-container">
            <MainFaceRating />
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
