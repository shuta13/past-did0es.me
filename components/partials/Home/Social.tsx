import React from "react";
import "./Social.scss";
import { ExternalLink } from "../../common/ExternalLink";
import AppTitle from "../../common/AppTitle";

const Social: React.FC = () => (
  <div className="SocialWrap">
    <div className="SocialClip">
      <AppTitle title="- Social -" />
      <ExternalLink href="https://twitter.com/did0es" text="Twitter" />
      <ExternalLink href="https://www.instagram.com/_did0es" text="Instagram" />
      <ExternalLink href="https://github.com/shuta13" text="GitHub" />
      <ExternalLink
        href="https://www.facebook.com/profile.php?id=100028982675881"
        text="Facebook"
      />
      <ExternalLink
        href="https://www.wantedly.com/users/95976645"
        text="Wantedly"
      />
      <ExternalLink href="https://scrapbox.io/did0es/" text="Scrapbox" />
    </div>
  </div>
);

export default Social;
