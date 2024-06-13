import React from "react";

import logo from "../../assets/superbbl-logo-long1.png";
import avatar from "../../assets/avatar blidnight 1.png";

import contour from "../../assets/avatar contour.png";
import arrow from "../../assets/icons/Group 17.png";
import coin from "../../assets/icons/Group 18.png";
import medal from "../../assets/icons/Group 19.png";
import visit from "../../assets/icons/Group 20.png";
import like from "../../assets/icons/Group 21.png";

const ProfilPageHeader = () => {
  return (
    <>
      <div>
        <div className="header">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <a href="">ACCEUIL</a>
              </li>
              <li className="header__nav__item">
                <a href="">ACTUALITÉS</a>
              </li>
              <li className="header__nav__item">
                <a href="">BOUTIQUE</a>
              </li>
              <li className="header__nav__item">
                <a href="">L’EQUIPE </a>
              </li>
              <li className="header__nav__item">
                <a href="">FORUM</a>
              </li>
              <li className="header__nav__item header__nav__item--active">
                <a href="">TCHAT</a>
              </li>
            </ul>
          </div>
          <div className="header__user">
            <div className="header__user__avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="header__user__pseudo">
              <div className="header__user__pseudo__text">
                <h3>BLIDNIGHT</h3>
              </div>
              <div className="header__user__pseudo__chevron">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="profil-header-container">
          <div className="profil-header">
            <div className="profil-header__top">
              <div className="profil-header__top__avatar">
                <img src={avatar} alt="" />
                <img
                  src={contour}
                  className="profil-header__top__avatar__contour"
                  alt=""
                />
              </div>
              <div className="profil-header__top__text">
                <div className="profil-header__top__text__title">
                  <h1>BLIDNIGHT</h1>
                  <h3>Staff, Blabla Respectable</h3>
                </div>
                <div className="profil-header__top__text__sub-title">
                  <i className="fa-solid fa-quote-left"></i>{" "}
                  <h3>Je suis content !</h3>
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
              <div className="profil-header__top__status">
                <div className="profil-header__top__status__online">
                  <h3>EN LIGNE</h3> <i className="fa-solid fa-circle"></i>
                </div>
                <div className="profil-header__top__status__like">
                  <h3>LIKÉ !</h3> <i className="fa-solid fa-heart"></i>
                </div>
                <div className="profil-header__top__status__signal">
                  <h3>SIGNALER LE PROFIL</h3>{" "}
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
              </div>
            </div>
            <div className="profil-header__bottom">
              <div className="profil-header__bottom__xp">
                <div className="profil-header__bottom__xp__icon">
                  <img src={arrow} alt="" />
                </div>
                <div className="profil-header__bottom__xp__text">
                  <h3>XP:</h3>
                  <h1>54050</h1>
                  <h3>(Niv. 22)</h3>
                </div>
              </div>
              <div className="profil-header__bottom__coins">
                <div className="profil-header__bottom__coins__icon">
                  <img src={coin} alt="" />
                </div>
                <div className="profil-header__bottom__coins__text">
                  <h3>Supercoins:</h3>
                  <h1>3990</h1>
                </div>
              </div>
              <div className="profil-header__bottom__medaille">
                <div className="profil-header__bottom__medaille__icon">
                  <img src={medal} alt="" />
                </div>
                <div className="profil-header__bottom__medaille__text">
                  <h3>Medailles:</h3>
                  <h1>1</h1>
                </div>
              </div>
              <div className="profil-header__bottom__visite">
                <div className="profil-header__bottom__visite__icon">
                  <img src={visit} alt="" />
                </div>
                <div className="profil-header__bottom__visite__text">
                  <h3>Visites:</h3>
                  <h1>9999</h1>
                </div>
              </div>
              <div className="profil-header__bottom__likes">
                <div className="profil-header__bottom__likes__icon">
                  <img src={like} alt="" />
                </div>
                <div className="profil-header__bottom__likes__text">
                  <h3>Likes:</h3>
                  <h1>9999</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPageHeader;
