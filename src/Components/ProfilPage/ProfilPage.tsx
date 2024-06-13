import "../ProfilPage/ProfilPage.scss";
import bonbon from "../../assets/bonbons.svg";
import ProfilPageHeader from "./ProfilPageHeader";
import ProfilPageLeftSide from "./ProfilPageLeftSide";
import ProfilePageInformationSection from "./ProfilePageInformationSection";
import ProfilPageSkinSection from "./ProfilPageSkinSection";
import ProfilPageFriendSection from "./ProfilPageFriendSection";
import ProfilPageSignatureSection from "./ProfilPageSignatureSection";
import ProfilPageTagSection from "./ProfilPageTagSection";
import ProfilPageMedalSection from "./ProfilPageMedalSection";

const ProfilPage = () => {
  return (
    <>
      <div className="bonbons">
        <img src={bonbon} alt="" />
      </div>
      <div>
        <ProfilPageHeader />
      </div>

      <div>
        <ProfilPageLeftSide />
      </div>
      <div className="content-profil-page-container">
        <div className="content-profil-page">
          <div>
            <ProfilPageSignatureSection />
          </div>
          <div>
            <ProfilePageInformationSection />
          </div>
          <div>
            <ProfilPageSkinSection />
          </div>
          <div>
            <ProfilPageFriendSection />
          </div>

          <div>
            <ProfilPageTagSection />
          </div>

          <div>
            <ProfilPageMedalSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
