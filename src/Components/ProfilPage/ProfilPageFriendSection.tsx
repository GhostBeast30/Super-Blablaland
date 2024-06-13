import FriendSectionPagination from "./FriendSectionPagination";
import FriendSectionCard from "./FriendSectionCard";
import AvatarFriend from "../../assets/avatar-friend.png";

import React from "react";

const ProfilPageFriendSection = () => {
  return (
    <>
      <div className="content-profil-page__friend-section">
        <div className="content-profil-page__friend-section__top">
          <i className="fa-solid fa-people-group"></i>
          <h2>Amis</h2>
        </div>
        <div className="content-profil-page__friend-section__area">
          <div className="content-profil-page__friend-section__area__cards">
            <div className="friend-card01">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card02">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card03">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card04">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card05">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card06">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card07">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card08">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card09">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card10">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card11">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card12">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card13">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card14">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
            <div className="friend-card15">
              <FriendSectionCard
                name="HeroySake"
                avatarLink={AvatarFriend}
                description="wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww wwwwwwwwwwww"
              />
            </div>
          </div>

          <div className="content-profil-page__friend-section__area__pagination">
            <FriendSectionPagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPageFriendSection;
