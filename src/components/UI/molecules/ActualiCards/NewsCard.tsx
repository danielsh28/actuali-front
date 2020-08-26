import React from "react";
import Card from "react-bootstrap/Card";
import { DEFAULT_SRC_IMG } from "../../../../utils/app-constants";
import styles from "./NewsCard.module.scss";

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
      <img
        className={styles.imgArticle}
        src={!urlToImage ? DEFAULT_SRC_IMG : urlToImage}
        alt={""}
      />
      <Card.Title>{title}</Card.Title>
      <a href={url}>{"מעבר לכתבה"}</a>
    </div>
  );
};
