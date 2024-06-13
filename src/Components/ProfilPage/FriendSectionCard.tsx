import AvatarFriend from "../../assets/avatar-friend.png";
import React from "react";

interface Props {
  name: string;
  avatarLink: string;
  description: string;
}

const FriendSectionCard = (props: Props) => {
  return (
    <>
      <div className="content-profil-page__friend-section__area__cards__card">
        <div className="content-profil-page__friend-section__area__cards__card__text">
          <h1>{props.name}</h1>
        </div>
        <div className="content-profil-page__friend-section__area__cards__card__shape">
          <div className="content-profil-page__friend-section__area__cards__card__shape__avatar">
            <img src={props.avatarLink} alt="" />
          </div>
          <div className="content-profil-page__friend-section__area__cards__card__shape__detail">
            <h3>{props.description}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendSectionCard;
