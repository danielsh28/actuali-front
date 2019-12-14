import React from 'react';
import Card from 'react-bootstrap/Card';

interface NewsData {
    title:string,
    imgUrl:string
}

const NewsCard :React.FC<NewsData> = ({title,imgUrl})=>{
    return <div>
        <Card>
            <Card.Img src={imgUrl}/>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Body>
                'content body'
            </Card.Body>
        </Card>

    </div>
}