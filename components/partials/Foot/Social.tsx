import React from "react";
import "./Social.scss";

const Social: React.FC = () => (
  <div className="SocialWrap">
    <div className="SocialContentsWrap">
      <div className="SocialLinkWrap">
        <a
          href="https://twitter.com/did0es"
          target="_blank"
          className="SocialLink"
        >
          Twitter
        </a>
      </div>
      <div className="SocialLinkWrap">
        <a
          href="https://www.facebook.com/profile.php?id=100028982675881"
          target="_blank"
          className="SocialLink"
        >
          Facebook
        </a>
      </div>
      <div className="SocialLinkWrap">
        <a
          href="https://www.instagram.com/did0es13"
          target="_blank"
          className="SocialLink"
        >
          Instagram
        </a>
      </div>
      <div className="SocialLinkWrap">
        <a
          href="https://github.com/shuta13"
          target="_blank"
          className="SocialLink"
        >
          GitHub
        </a>
      </div>
      <div className="SocialLinkWrap">
        <a href="https://blog.did0es.me" target="_blank" className="SocialLink">
          Blog
        </a>
      </div>
      <div className="SocialLinkWrap">
        <a
          href="https://soundcloud.com/user-858183512"
          target="_blank"
          className="SocialLink"
        >
          SoundCloud
        </a>
      </div>
    </div>
  </div>
);

export default Social;
