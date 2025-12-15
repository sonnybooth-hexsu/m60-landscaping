import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import { ImageObject } from '../../types';
import * as classes from './style.module.css';

export interface ArticleCard {
    image?: ImageObject;
    category: string;
    title: string;
    publishedAt: Date;
}

interface ArticleCardProps {
    data: ArticleCard;
    showBanner?: boolean;
}

export function ArticleCard(props: ArticleCardProps): React.ReactElement {
    const darkModeEnabled = true;

    // Needed to differentiate between external and internal links (whether or not we use Gatsby Link)

    const articleCard = (
        <article
            className={classes.Card}
            style={darkModeEnabled ? { border: '0.125rem solid var(--primary-color)' } : undefined}
        >
            {props.showBanner && (
                <div className={classes.Banner}>
                    {props.data.image && props.data.image.src && (
                        <img
                            className={classes.ImageWrapper}
                            imgClassName={classes.Image}
                            objectFit={props.data.image.objectFit || 'cover'}
                            src={props.data.image.src}
                            alt={props.data.image.alt || props.data.title}
                        />
                    )}
                </div>
            )}
            <div className={classes.DescriptionWrapper}>
                <span className={classes.Category}>
                    <u>{props.data.category}</u>
                </span>
                <h4 className={classes.Title}>{props.data.title}</h4>
                <div className={classes.Details}>
                    {props.data.publishedAt}
                </div>
            </div>
        </article>
    );

    return (
        <div target="_blank" rel="noopener noreferrer" title={props.data.title}>
            {articleCard}
        </div>
    )
}

export function ArticleCardSkeleton(): React.ReactElement {
    const darkModeEnabled = true;
    return (
        <div
            className={classes.Card}
            style={darkModeEnabled ? { border: '0.125rem solid var(--primary-color)' } : undefined}
        >
            <div className={classes.DescriptionWrapper}>
                <SkeletonLoader
                    style={{
                        height: '1.5rem',
                        marginBottom: '.5rem',
                        background: 'var(--tertiary-color)',
                    }}
                />
                <SkeletonLoader style={{ height: '4rem', background: 'var(--tertiary-color)' }} />
                <SkeletonLoader
                    style={{
                        height: '.75rem',
                        width: '50%',
                        marginTop: '.5rem',
                        background: 'var(--tertiary-color)',
                    }}
                />
            </div>
        </div>
    );
}

function formatDate(date: Date): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
