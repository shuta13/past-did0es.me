import React from "react";
import "./Social.scss";
import { ExternalLink } from "../../common/ExternalLink";
import AppTitle from "../../common/AppTitle";

const Social: React.FC = () => (
  <div className="SocialWrap">
    <div className="SocialClip">
    <AppTitle title="- Social -" />
    <div className="SocialContentsWrap">
      <ExternalLink href="https://twitter.com/did0es" text="Twitter" />
      <ExternalLink
        href="https://www.facebook.com/profile.php?id=100028982675881"
        text="Facebook"
      />
      <ExternalLink
        href="https://www.instagram.com/did0es13"
        text="Instagram"
      />
      <ExternalLink href="https://github.com/shuta13" text="GitHub" />
      <ExternalLink href="https://did0es.hatenablog.jp/" text="Blog" />
    </div>
    </div>
  </div>
);

export default Social;
