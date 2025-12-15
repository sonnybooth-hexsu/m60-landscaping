import React from "react";
import {
  AboutSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import { HeroSection } from "../components/Hero";
import { ArticlesSection } from "../components/Articles";


export default function IndexPage() {
  return (
    <>
      <Seo title="M60 Civils & Landscapes LTD" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About us" />
      </Page>
    </>
  );
}
