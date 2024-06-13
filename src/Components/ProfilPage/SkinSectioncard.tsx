import React from "react";

interface Props {
  background: string;
  skin: string;
  description: string;
  isFavorite: boolean;
}

const SkinSectioncard = (props: Props) => {
  return (
    <div className="content-profil-page__skin__area__cards__card">
      <img
        className="content-profil-page__skin__area__cards__card__skinBackground"
        src={props.background}
        alt=""
      />
      <div
        className="content-profil-page__skin__area__cards__card__star-icon 
        content-profil-page__skin__area__cards__card__star-icon--active"
      >
        {props.isFavorite ? (
          <div>
            <i
              className="fa-solid fa-star  
         content-profil-page__skin__area__cards__card__star-icon--active
         "
            ></i>
          </div>
        ) : (
          <div>
            <i
              className="fa-solid fa-star 
            content-profil-page__skin__area__cards__card__star-icon"
            ></i>
          </div>
        )}
      </div>
      <div className="content-profil-page__skin__area__cards__card__coin-icon">
        <img src={props.skin} alt="" />
      </div>
      <div
        className="content-profil-page__skin__area__cards__card__text
        content-profil-page__skin__area__cards__card__text--active"
      >
        <h3>{props.description}</h3>
      </div>
    </div>
  );
};

export default SkinSectioncard;
