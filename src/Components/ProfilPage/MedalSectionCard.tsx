import medalsquare from "../../assets/icons/medaille pécheur 1.png";
const MedalSectionCard = () => {
  return (
    <>
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
    </>
  );
};

export default MedalSectionCard;
