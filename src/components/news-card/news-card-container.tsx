import React, {useEffect, useState} from 'react';
import {NewsCard,NewsData} from './news-card';
import axios from 'axios';


const CardsList :React.FC  =  function (){
    const [newsDataList, setNewsList] = useState<Array<NewsData>>([]);
    async function getNews() {
        await axios.get('http://localhost:3000/web-api?resource=Ynet').then((res) => {
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
    return (<div>
        {cardList}
    </div>);
};

export default CardsList;

