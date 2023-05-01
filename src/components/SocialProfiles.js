import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = props => {
  const { title, icon, link } = props.socialProfile;

  return (
    <div style={{ display: 'inline-block', width: 30, margin: 10 }}>
      <a href={link}>
        <img src={icon} alt={title} style={{ width: 30, height: 30 }} />
      </a>
    </div>
  );
}

const SocialProfiles = () => (
  <div>
    <h2>Connect with me!</h2>
    <span>
      {
        SOCIAL_PROFILES
          .filter((SOCIAL_PROFILE) => SOCIAL_PROFILE.visible === true)
          .map((SOCIAL_PROFILE) => <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />)
      }
    </span>
  </div>
)

export default SocialProfiles;