import React from "react";
import {
  AboutSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import { HeroSectionTwo } from "../components/HeroTwo";
import { ArticlesSectionTwo } from "../components/ArticlesTwo";


export default function IndexPage() {
  return (
    <>
      <Seo title="M60 Civils & Landscapes LTD" />
      <Page useSplashScreenAnimation>
        <HeroSectionTwo sectionId="hero" />
        <ArticlesSectionTwo sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About us" />
      </Page>
    </>
  );
}
