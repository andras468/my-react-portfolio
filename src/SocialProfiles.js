import React, { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
  render() {
    const { title, icon, link } = this.props.socialProfile;

    return (
      <div style={{ display: 'inline-block', width: 30, margin: 10 }}>
        <a href={link}>
          <img src={icon} alt={title} style={{ width: 30, height: 30 }} />
        </a>
      </div>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        <span>
          {
            SOCIAL_PROFILES
              .filter((SOCIAL_PROFILE) => SOCIAL_PROFILE.visible === true)
              .map((SOCIAL_PROFILE) => {
                return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
              })
          }
        </span>
      </div>
    );
  }
}

export default SocialProfiles;