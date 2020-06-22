import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import {useState} from 'react';
import {DEFAULT_SRC_IMG} from '../../../../utils/app-constants';
import styles from './NewsCard.module.scss';

export interface INewsData {
    resourceName?:string
    title:string,
    urlToImage:string| null,
    url:string,
    publishedAt?:string
}

 export const NewsCard :React.FC<INewsData> = ({title,urlToImage,url})=>{
    const [imgSrc,setImgeSrc] = useState<string|null>(urlToImage);

    useEffect(()=>{
        if(imgSrc== null){
            setImgeSrc(DEFAULT_SRC_IMG);
        }
    },[]);
    return (
        <Card className={styles.newsCard} >
            <Card.Img   variant={'top'} src={imgSrc!}  alt={''}/>
            <Card.Title >
                {title}
            </Card.Title>
            <Card.Link>
                <Button variant={'primary'}  href={url}>
                    {'מעבר לכתבה'}
                </Button>
            </Card.Link>
        </Card>)
};