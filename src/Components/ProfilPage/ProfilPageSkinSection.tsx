import fondskin from "../../assets/fond skin 1.png";
import supercoin from "../../assets/icons/Pièce SuperCoin 1.png";
import ProfilPageSkinSectionPagination from "./ProfilPageSkinSectionPagination";
import SkinSectioncard from "./SkinSectioncard";
import React from "react";

const ProfilPageSkinSection = () => {
  return (
    <>
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
              <option value="1">Trier : par ordre alphabétique A-Z</option>
            </select>
            <div className="content-profil-page__skin__area__top__skin-count">
              <h3>Skins possédés : 17 / 19</h3>
            </div>
          </div>
          <hr />
          <div className="content-profil-page__skin__area__cards">
            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />
            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />

            <SkinSectioncard
              isFavorite={true}
              background={fondskin}
              skin={supercoin}
              description="Piece SuperCoin"
            />
          </div>
          <div className="content-profil-page__skin__area__pagination">
            <ProfilPageSkinSectionPagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPageSkinSection;
