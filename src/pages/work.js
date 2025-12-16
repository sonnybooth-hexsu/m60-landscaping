import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";import workone from '../../content/images/workone.jpeg';
import worktwo from '../../content/images/worktwo.jpeg'; // Adjust the path as needed
import workthree from '../../content/images/workthree.jpeg'; // Adjust the path as needed
import workfour from '../../content/images/workfour.jpeg'; // Adjust the path as needed

export default function ImprintPage() {
    const images = [
        {
            original: workone,
            thumbnail: workone,
        },
        {
            original: worktwo,
            thumbnail: worktwo,
        },
        {
            original: workthree,
            thumbnail: workthree,
        },
        {
            original: workfour,
            thumbnail: workfour,
        },
    ];
  return (
    <>
      <Seo title="Work" useTitleTemplate={true} noIndex={true} />
      <Page>
          <div style={{ padding: "var(--page-padding)" }}>
              <ImageGallery items={images} />
          </div>
      </Page>
    </>
  );
}
