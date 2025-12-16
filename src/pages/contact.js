import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Contact" useTitleTemplate={true} noIndex={true} />
      <Page>
          <div style={{ padding: "var(--page-padding)" }}>
              Address and email and stuff in here maybe a contact form? Social media links?
          </div>
      </Page>
    </>
  );
}
