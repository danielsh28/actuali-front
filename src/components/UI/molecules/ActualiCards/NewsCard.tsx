import React from 'react';
import Card from 'react-bootstrap/Card';
import { DEFAULT_SRC_IMG } from '../../../../utils/app-constants';
import styles from './NewsCard.module.scss';
import Button from 'react-bootstrap/Button';

export interface INewsData {
  resourceName?: string;
  title: string;
  urlToImage: string | null;
  url: string;
  publishedAt?: string;
}

export const NewsCard: React.FC<INewsData> = ({ title, urlToImage, url }) => {
  return (
    <div className={styles.newsCard}>
      <img className={styles.imgArticle} src={!urlToImage ? DEFAULT_SRC_IMG : urlToImage} alt={''} />
      <div className={styles.content}>
        <Card.Title>{title}</Card.Title>
        <Button variant={'secondary'} href={url}>
          {'מעבר לכתבה'}
        </Button>
      </div>
    </div>
  );
};
