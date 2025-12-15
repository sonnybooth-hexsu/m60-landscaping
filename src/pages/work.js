import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
      <Page>
          <div style={{ padding: "var(--page-padding)" }}>
              Loads of pictures of your work and that in here. Any testimonials off people and that.
          </div>
      </Page>
    </>
  );
}
