import React from "react";

const ProfilPageTagSection = () => {
  return (
    <>
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
    </>
  );
};

export default ProfilPageTagSection;
