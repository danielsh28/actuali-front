import React, {useEffect, useState} from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import axios from 'axios'
import {NewsCard,NewsData} from '../molecules/news-card';
import sideBarStyle from './ActualySideBar/side-bar-style';
import {mockHeadlines} from '../../../../assets/mocks/healines.mock.data'

const CardsList :React.FC  =  function (){
    const [newsDataList, setNewsList] = useState<Array<NewsData>>([]);

    async function getNews() {
        console.log(process.env.REACT_APP_DATA);
        if (process.env.REACT_APP_DATA === 'mock') {
            setNewsList(mockHeadlines);
        } else {
            await axios.get('http://localhost:3001/web-api?resource=').then((res) => {
                setNewsList(res.data);
            });
        }
    }
        useEffect(()=>{
            getNews().catch(err=>console.log(err));
        },[]);
        const cardList = newsDataList.map((news,index)=>
            <Col>
             <NewsCard urlToImage={news.urlToImage} title={news.title}  url={news.url} key={index}/>
            </Col>);
    return (<Container>
            <Row>
            <Col xl={10} >
                <Container>
                    <Row>
                    {cardList}
                    </Row>
                </Container>
            </Col>
                <Col xl={2}  style={sideBarStyle}>

                </Col>
            </Row>
        </Container>
    );
};

export default CardsList;

