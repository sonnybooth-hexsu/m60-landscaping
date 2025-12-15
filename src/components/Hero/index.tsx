import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from '../Animation';
import { useCalendlyWidget } from '../../hooks/useCalendlyWidget';
import { Section } from '../Section';
import { SocialProfiles } from '../SocialProfiles';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

export function HeroSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0];

    const CalendlyWidget = useCalendlyWidget(data.calendly);

    return (
        <Animation type="fadeUp" delay={400}>
            {CalendlyWidget}
            <Section anchor={props.sectionId} additionalClasses={[classes.HeroContainer]}>
                {data.heroPhoto?.src && (
                    <div className={classes.heroImageCont}>
                        <GatsbyImage
                            className={classes.heroImage}
                            image={data.heroPhoto.src.childImageSharp.gatsbyImageData}
                            alt={data.heroPhoto.alt || `Profile Image`}
                            loading="eager"
                        />
                    </div>
                )}
                <div className={classes.Hero}>
                    <div className={classes.Intro}>
                        {data.intro && <span className={classes.ImagePrefix}>{data.intro}</span>}
                        {data.image?.src && (
                            <Animation className={classes.Image} type="waving-hand" duration={2500} iterationCount={3}>
                                <GatsbyImage
                                    image={data.image.src.childImageSharp.gatsbyImageData}
                                    alt={data.image.alt || `Intro Image`}
                                    loading="eager"
                                />
                            </Animation>
                        )}
                    </div>
                    <h1 className={classes.Title}>{data.title}</h1>
                    <h2 className={classes.Subtitle}>
                        {data.subtitle.prefix}
                        <u>{data.subtitle.highlight}</u>
                        {data.subtitle.suffix}
                    </h2>
                </div>
            </Section>
        </Animation>
    );
}
