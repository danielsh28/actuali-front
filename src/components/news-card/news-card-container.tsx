import React, {useEffect, useState} from 'react';
import {NewsCard,NewsData} from './news-card';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';

const CardsList :React.FC  =  function (){
    const [newsDataList, setNewsList] = useState<Array<NewsData>>([]);
    async function getNews() {
        await axios.get('http://localhost:3001/web-api?resource=').then((res) => {
            setNewsList(res.data.headlines);
        });
       //setNewsList([{title:"title",imgUrl:"imgUrl",url:"url"}]);
    }
        useEffect(()=>{
            getNews().catch(err=>console.log(err));
        },[]);
        const cardList = newsDataList.map((news,index)=> <NewsCard urlToImage={news.urlToImage}
                                                               title={news.title}
                                                              url={news.url} key={index}/>);
    return (<CardDeck>
        {cardList}
        </CardDeck>
    );
};

export default CardsList;

