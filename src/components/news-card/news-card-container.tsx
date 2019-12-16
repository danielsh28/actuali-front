import React, {useEffect, useState} from 'react';
import {NewsCard,NewsData} from './news-card';
import axios from 'axios';


const CardsList :React.FC  =  function (){
    const newsDataList:Array<NewsData> =[]
    const [newsList, setNewsList] = useState(newsDataList);
    useEffect(()=>{

    });
    const cardList = newsDataList.map(news=><NewsCard imgUrl={news.imgUrl} title={news.title} url={news.url}/>);
    return (<div>
        {cardList}
    </div>);
};

export default CardsList;

