import React from 'react';
import Card from 'react-bootstrap/Card';

export interface NewsData {
    title:string,
    urlToImage:string,
    url:string
}

 export const NewsCard :React.FC<NewsData> = ({title,urlToImage,url})=>{
    return <div>
        <Card>
            <Card.Img  variant={'top'} src={urlToImage}/>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Body>
                <a  href={url}>
                    {'מעבר לכתבה'}
                </a>
            </Card.Body>
        </Card>

    </div>
};