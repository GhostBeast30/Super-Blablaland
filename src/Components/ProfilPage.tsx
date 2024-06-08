import "../ProfilPage.scss";
import logo from "../assets/superbbl-logo-long1.png";
import avatar from "../assets/avatar blidnight 1.png";
import contour from "../assets/avatar contour.png";
import bonbon from "../assets/bonbonslong.png";
import arrow from "../assets/Group 17.png";
import coin from "../assets/Group 18.png";
import medal from "../assets/Group 19.png";
import visit from "../assets/Group 20.png";
import like from "../assets/Group 21.png";
import fondskin from "../assets/fond skin 1.png";
import supercoin from "../assets/Pièce SuperCoin 1.png";
import ProfilPagePagination from "./ProfilPagePagination";
import AvatarFriend from "../assets/avatar-friend.png";
import FriendSectionPagination from "./FriendSectionPagination";
import medalsquare from "../assets/medaille pécheur 1.png";

const ProfilPage = () => {
  return (
    <>
      <div className="bonbons">
        <img src={bonbon} alt="" />
      </div>

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
      <div className="left-side-profil-page">
        Paramètre de visibilité de nos informations : <br />
        Qui peut voir toutes mes informations : <br />
        Tout le monde (coché de base) <br /> Uniquement mes amis <br /> Personne
        (aucune catégorie visiblement ni le bandeau rose <br /> ni la phrase
        d’accroche. Il reste l’avatar, le contour d’avatar, <br /> le pseudo, le
        titre et une phrase à la place de la signature - <br /> “Blidnight ne
        souhaite pas montrer les informations de son profil”) <br />
        <br /> Le bandeau <br /> □ afficher l’xp (obligatoire) - grisé, ne pas
        intéragir avec <br /> □ afficher les médailles <br /> □ afficher les
        supercoins <br />
        □ afficher le nombre de visite <br /> □ afficher le nombre de likes du
        profil <br /> □ ne rien afficher (le bandeau n’est plus visible) <br />{" "}
        <br />
        Les catégories <br /> - Pouvoir changer l’ordre, drag and drop <br /> -
        et afficher / masquer des catégories <br /> <br />
        La signature n’apparaît pas si on n’a rien mis dedans. Les tags n’ont
        plus. <br />
        Les médailles n’ont plus si on n’en a aucune ça ne sert <br />
        à rien d’afficher un espace VIDE. <br /> PERSONNALISATION : <br />
        Changer l’image de profil (taille, poids, le type de fichier) <br />{" "}
        Changer le contour de l’image de profil <br />
        Changer le background du profil <br />
        Changer les images qui flottent (masquer/afficher) <br />
        Changer le background de notre “étiquette ami”
      </div>
      <div className="content-profil-page-container">
        <div className="content-profil-page">
          <div className="content-profil-page__signature">
            <div className="content-profil-page__signature__top">
              <i className="fa-solid fa-paintbrush"></i>
              <h2>Signature</h2>
            </div>
            <div className="content-profil-page__signature__area"></div>
          </div>
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
                      Le musée, parce que je suis fier d’avoir réussi à dev le
                      nuage jaune
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-profil-page__skin">
            <div className="content-profil-page__skin__top">
              <i className="fa-solid fa-user-ninja"></i>
              <h2>Skins</h2>
            </div>
            <div className="content-profil-page__skin__area">
              <div className="content-profil-page__skin__area__top">
                <input
                  type="text"
                  placeholder="Rechercher un skin..."
                  className="content-profil-page__skin__area__top__search-input"
                />
                <select
                  className="content-profil-page__skin__area__top__select-filter"
                  name=""
                  id=""
                >
                  <option value="">Trier : par ordre alphabétique A-Z</option>
                </select>
                <div className="content-profil-page__skin__area__top__skin-count">
                  <h3>Skins possédés : 17 / 19</h3>
                </div>
              </div>
              <hr />
              <div className="content-profil-page__skin__area__cards">
                <div className="content-profil-page__skin__area__cards__card">
                  <img src={fondskin} alt="" />
                  <div
                    className="content-profil-page__skin__area__cards__card__star-icon 
                  content-profil-page__skin__area__cards__card__star-icon--active"
                  >
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div
                    className="content-profil-page__skin__area__cards__card__text
                  content-profil-page__skin__area__cards__card__text--active"
                  >
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>

                <div className="content-profil-page__skin__area__cards__card__second">
                  <div className="content-profil-page__skin__area__cards__card__second__star-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__coin-icon">
                    <img src={supercoin} alt="" />
                  </div>
                  <div className="content-profil-page__skin__area__cards__card__second__text">
                    <h3>Pièce SuperCoin</h3>
                  </div>
                </div>
              </div>
              <div className="content-profil-page__skin__area__pagination">
                <ProfilPagePagination />
              </div>
            </div>
          </div>
          <div className="content-profil-page__friend-section">
            <div className="content-profil-page__friend-section__top">
              <i className="fa-solid fa-people-group"></i>
              <h2>Amis</h2>
            </div>
            <div className="content-profil-page__friend-section__area">
              <div className="content-profil-page__friend-section__area__cards">
                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="content-profil-page__friend-section__area__cards__card">
                  <div className="content-profil-page__friend-section__area__cards__card__text">
                    <h1>HeroySake</h1>
                  </div>
                  <div className="content-profil-page__friend-section__area__cards__card__shape">
                    <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
                      <img src={AvatarFriend} alt="" />
                    </div>
                    <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
                      <h3>
                        wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-profil-page__friend-section__area__pagination">
                <FriendSectionPagination />
              </div>
            </div>
          </div>

          <div className="content-profil-page__tag-section">
            <div className="content-profil-page__tag-section__top">
              <i className="fa-solid fa-tag"></i>
              <h2>Tags</h2>
            </div>
            <div className="content-profil-page__tag-section__area">
              <h3>
                <span className="content-profil-page__tag-section__area__anime">
                  Anime
                </span>{" "}
                ;
                <span className="content-profil-page__tag-section__area__developper">
                  Développer
                </span>{" "}
                ;
                <span className="content-profil-page__tag-section__area__lorem">
                  Lorem Ipsum
                </span>{" "}
                ;
                <span className="content-profil-page__tag-section__area__pizza">
                  Pizza
                </span>{" "}
                ;
                <span className="content-profil-page__tag-section__area__poire">
                  Poire
                </span>{" "}
                ;
                <span className="content-profil-page__tag-section__area__figma">
                  Figma
                </span>
              </h3>
            </div>
          </div>

          <div className="content-profil-page__medal-section">
            <div className="content-profil-page__medal-section__top">
              <i className="fa-solid fa-medal"></i>
              <h2>Medailles</h2>
            </div>
            <div className="content-profil-page__medal-section__area">
              <div className="content-profil-page__medal-section__area__medal-card">
                <img src={medalsquare} alt="" />
                <div className="content-profil-page__medal-section__area__medal-card__text">
                  <h2>Médaillon pécheur</h2>
                  <h3> Niveau 3 Obtenu le 01/09/2023</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
