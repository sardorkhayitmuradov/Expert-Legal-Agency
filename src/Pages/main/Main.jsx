import React from 'react';
import MainHeader from '../../components/mainHeader/MainHeader';
import MainHero from '../../components/mainHero/mainHero';
import Footer from '../../components/Footer/Footer';
import MainAside from '../../components/MainAside/MainAside';
import MainOrder from '../../components/mainOrder/mainOrder';
import MainRating from '../../components/mainRating/mainRating';
import MainFaceRating from '../../components/mainFaceRating/mainFaceRating';
import MainService from '../../components/mainService/MainService';
<<<<<<< HEAD
import MainAccordion from '../../components/mainAccordion/MainAccordion';
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
      <div className="accordion">
        <MainAccordion/>
      </div>
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
