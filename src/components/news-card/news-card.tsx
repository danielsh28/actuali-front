import React from 'react';
import Card from 'react-bootstrap/Card';

export interface NewsData {
    title:string,
    imgUrl:string,
    url:string
}

 export const NewsCard :React.FC<NewsData> = ({title,imgUrl,url})=>{
    return <div>
        <Card>
            <Card.Img src={imgUrl}/>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Body>
                <a href={url}/>
            </Card.Body>
        </Card>

    </div>
};