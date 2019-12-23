import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export interface NewsData {
    title:string,
    urlToImage:string,
    url:string
}

 export const NewsCard :React.FC<NewsData> = ({title,urlToImage,url})=>{
    return (
        <Card  style={{width:'18rem'}} border={'primary'}>
            <Card.Img  variant={'top'} src={urlToImage}/>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Body>
                <Button variant={'primary'}  href={url}>
                    {'מעבר לכתבה'}
                </Button>
            </Card.Body>
        </Card>)
};