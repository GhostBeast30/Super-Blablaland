import "../index.css";
import "../App.css";
import logo from "../assets/superbbl-logo-long1.png";
import image from "../assets/img.png";
import avatar from "../assets/avatar éditeur.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import noimage from "../assets/noimage.png";
import bonbon from "../assets/bonbons.png";

const HomePage = () => {
  return (
    <>
      <div className="bonbons">
        <img src={bonbon} alt="" />
      </div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">ACCEUIL</a>
            </li>
            <li>
              <a href="#">ACTUALITES</a>
            </li>
            <li>
              <a href="#">BOUTIQUE</a>
            </li>
            <li>
              <a href="#">L'EQUIPE</a>
            </li>
            <li>
              <a href="#">TCHAT</a>
            </li>
          </ul>
        </div>
        <div className="user-box"></div>
      </div>
      <div className="title-box">
        <div className="title">
          <h1>ACTUALITÉS</h1>
          <h4>Suis les nouveautés!</h4>
        </div>
      </div>
      <div className="content-container">
        <div className="content-box">
          <div className="search-box">
            <div className="wrapper">
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <input
                className="input"
                type="text"
                placeholder="Recherchez le titre d'un article"
              />
            </div>

            <label>
              <select className="select-tag" name="tag" id="">
                <option value="app">
                  {" "}
                  <i className="fa-solid fa-tag"></i> Tous les tags sont
                  visibles
                </option>
                <option value="a">Recherche un tag</option>
                <option value="app">Deselectionner tous les tags</option>
                <option value="app">Tous les tags sont visibles</option>
                <option value="app">News</option>
                <option value="app">Petite news</option>
                <option value="app">Nouveau Skin</option>
                <option value="app">Skin nostalgique</option>
                <option value="app">Evènement spécial</option>
                <option value="app">Fonctionnalité interne</option>
                <option value="app">Correctif sur le jeu</option>
              </select>
            </label>
            <label>
              <select className="select-filter" name="filter" id="">
                <option value="a">Trier du plus recent au plus ancien</option>
                <option value="b">
                  <input type="text" />
                </option>
                <option value="c"></option>
              </select>
            </label>
          </div>
          <div className="card-container">
            <div className="event-card">
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="text-area">
                <div className="event-title">
                  <i className="fa-solid fa-tag"></i>
                  <h4>ÉVÉNEMENT SPÉCIAL ; ANIMATIONS MODO ; RÉCOMPENSES</h4>
                </div>

                <h2>Des SuperBonbons pour Bonbec'tober</h2>
                <h5>
                  L'équipe d'animation est fière de vous présenter le tout
                  premier événement célébrant Bonbec'tober sur le Tchat.
                  Participe aux animations, gagne des superbonbons et échange
                  les contres des récompenses !{" "}
                  <a href="#">Lire l’article entier</a>
                </h5>
                <div className="card-footer">
                  <div className="editor-box">
                    <div className="avatar-editor">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="post-date">
                      <h4>13/10/2023, 9H30 </h4>
                    </div>
                  </div>
                  <div className="vus-comment-like-box">
                    <div className="vus">
                      0 <i className="fa-regular fa-eye"></i>
                    </div>
                    <div className="comment">
                      0 <i className="fa-regular fa-comment"></i>
                    </div>
                    <div className="like">
                      0 <i className="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hr1">
            <hr color="" />
          </div>
          <div className="card-container2">
            <div className="card-devblog">
              <div className="image2">
                <img src={image2} alt="" />
              </div>

              <div className="card-right-side">
                <h3>Devblog</h3>
                <h5>
                  Correction de l’oeil du Petit robot. Correction de l’édition
                  d’un commentaire. <a href="#">Lire le patch en entier</a>
                </h5>
                <h6>17/10/2023, 21H21</h6>
              </div>
            </div>
          </div>
          <div className="news-title">
            <h1>NEWS PRÉCÉDENTES</h1>
          </div>

          <div className="card-container3">
            <div className="news-card">
              <div className="image3">
                <img src={image3} alt="" />
              </div>
              <div className="text-area">
                <div className="event-title">
                  <i className="fa-solid fa-tag"></i>
                  <h4>ÉVÉNEMENT SPÉCIAL ; ANIMATIONS MODO ; RÉCOMPENSES</h4>
                </div>
                <h2>2 skins inédits !</h2>
                <h5>
                  Big Bouche et Monocorne rejoignent SuperBlablaland.
                  <a href="">Lire l’article entier</a> -{" "}
                  <a href="#">Voir les skins en boutique </a>
                </h5>
                <div className="card-footer">
                  <div className="editor-box">
                    <div className="avatar-editor">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="post-date">
                      <h4>13/10/2023, 9H30 </h4>
                    </div>
                  </div>
                  <div className="vus-comment-like-box">
                    <div className="vus">
                      0 <i className="fa-regular fa-eye"></i>
                    </div>
                    <div className="comment">
                      0 <i className="fa-regular fa-comment"></i>
                    </div>
                    <div className="like">
                      0 <i className="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hr2">
            <hr color="" />
          </div>

          <div className="card-container4">
            <div className="news-card">
              <div className="image3">
                <img src={noimage} alt="" />
              </div>
              <div className="text-area"></div>
            </div>
          </div>

          <div className="footer"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
