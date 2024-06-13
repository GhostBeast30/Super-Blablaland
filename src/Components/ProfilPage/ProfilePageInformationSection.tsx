import React from "react";

const ProfilePageInformationSection = () => {
  return (
    <>
      <div className="content-profil-page__information">
        <div className="content-profil-page__information__top">
          <i className="fa-solid fa-magnifying-glass"></i>
          <h2>Informations</h2>
        </div>
        <div className="content-profil-page__information__area">
          <div className="content-profil-page__information__area__left">
            <div className="content-profil-page__information__area__left__date-inscription">
              <div className="content-profil-page__information__area__left__date-inscription__icon">
                <i className="fa-solid fa-pencil"></i>
              </div>
              <div className="content-profil-page__information__area__left__date-inscription__text">
                <h3>Inscris depuis le : 01/01/2022</h3>
              </div>
            </div>
            <div className="content-profil-page__information__area__left__connexion">
              <div className="content-profil-page__information__area__left__connexion__icon">
                <i className="fa-solid fa-wifi"></i>
              </div>
              <div className="content-profil-page__information__area__left__connexion__text">
                <h3>Dernière connexion : 12/10/2023</h3>
              </div>
            </div>
            <div className="content-profil-page__information__area__left__metier">
              <div className="content-profil-page__information__area__left__metier__icon">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div className="content-profil-page__information__area__left__metier__text">
                <h3>Métier actuel / métier rêvé :</h3>
                <h2>Développeur</h2>
              </div>
            </div>
            <div className="content-profil-page__information__area__left__qualite">
              <div className="content-profil-page__information__area__left__qualite__icon">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div className="content-profil-page__information__area__left__qualite__text">
                <h3>Qualites :</h3>
                <h2>J'aime le challenge</h2>
              </div>
            </div>
          </div>

          <div className="content-profil-page__information__area__middle">
            <div className="content-profil-page__information__area__middle__date-inscription">
              <div className="content-profil-page__information__area__middle__date-inscription__icon">
                <i className="fa-solid fa-cake-candles"></i>
              </div>
              <div className="content-profil-page__information__area__middle__date-inscription__text">
                <h3>Anniversaire : 11 novembre</h3>
              </div>
            </div>
            <div className="content-profil-page__information__area__middle__connexion">
              <div className="content-profil-page__information__area__middle__connexion__icon">
                <i className="fa-solid fa-venus-mars"></i>
              </div>
              <div className="content-profil-page__information__area__middle__connexion__text">
                <h3>Genre : Inconnu</h3>
              </div>
            </div>
            <div className="content-profil-page__information__area__middle__metier">
              <div className="content-profil-page__information__area__middle__metier__icon">
                <i className="fa-solid fa-gamepad"></i>
              </div>
              <div className="content-profil-page__information__area__middle__metier__text">
                <h3>Passions / Loisirs :</h3>
                <h2>Les animes.Apprendre</h2>
              </div>
            </div>
            <div className="content-profil-page__information__area__middle__qualite">
              <div className="content-profil-page__information__area__middle__qualite__icon">
                <i className="fa-solid fa-mask"></i>
              </div>
              <div className="content-profil-page__information__area__middle__qualite__text">
                <h3>Skin SBBL préféré et pourquoi : </h3>
                <h2>Cactus, J’aime bien ce qui pique.</h2>
              </div>
            </div>
          </div>

          <div className="content-profil-page__information__area__right">
            <div className="content-profil-page__information__area__right__date-inscription">
              <div className="content-profil-page__information__area__right__date-inscription__icon">
                <i className="fa-solid fa-earth-americas"></i>
              </div>
              <div className="content-profil-page__information__area__right__date-inscription__text">
                <h3>Pays : Haiti</h3>
              </div>
            </div>
            <div className="content-profil-page__information__area__right__connexion">
              <div className="content-profil-page__information__area__right__connexion__icon">
                <i className="fa-solid fa-flag"></i>
              </div>
              <div className="content-profil-page__information__area__right__connexion__text">
                <h3>Nationalite :</h3>
              </div>
            </div>
            <div className="content-profil-page__information__area__right__metier">
              <div className="content-profil-page__information__area__right__metier__icon">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="content-profil-page__information__area__right__metier__text">
                <h3>Rêve / objectif : </h3>
                <h2>
                  WWWWWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWWWWW
                  WWWWWWWWWWWWWWWWWW
                </h2>
              </div>
            </div>
            <div className="content-profil-page__information__area__right__qualite">
              <div className="content-profil-page__information__area__right__qualite__icon">
                <i className="fa-solid fa-map"></i>
              </div>
              <div className="content-profil-page__information__area__right__qualite__text">
                <h3>Map SBBL préférée et pourquoi :</h3>
                <h2>
                  Le musée, parce que je suis fier d’avoir réussi à dev le nuage
                  jaune
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePageInformationSection;
