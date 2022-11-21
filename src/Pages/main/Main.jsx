import React from "react";
import MainHeader from "../../components/mainHeader/MainHeader";
import MainHero from "../../components/mainHero/mainHero";
import Footer from "../../components/Footer/Footer";
import MainAside from "../../components/MainAside/MainAside";
import MainOrder from "../../components/mainOrder/mainOrder";
import MainRating from "../../components/mainRating/mainRating";
import MainFaceRating from "../../components/mainFaceRating/mainFaceRating";
import MainService from "../../components/mainService/MainService";
import MainAccordion from "../../components/mainAccordion/MainAccordion";
import "./Main.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

const Main = ({ open, setOpen }) => {
  return (
    <>
      <header className="header">
       {window.localStorage.getItem("token") ? (
        <ProfileHeader/>
       ):(
        <MainHeader open={open} setOpen={setOpen} />
       )}
      </header>
      <main className="main">
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
        <section className="accordion">
          <MainAccordion />
        </section>
        <section className="service">
          <MainService />
        </section>
        <aside className="aside">
          <MainAside />
        </aside>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Main;
