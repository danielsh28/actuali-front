import React, {useEffect, useState} from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import axios from 'axios';
import {NewsCard,INewsData} from '../../UI/molecules/NewsCard/NewsCard';
import sideBarStyle from '../../UI/organisms/ActualySideBar/side-bar-style';
import {mockHeadlines} from '../../../assets/mocks/healines.mock.data';
import  styles from './ActualiWidgetTamplate.module.css';

const ActualiWidgetTamplate :React.FC  =  function (){
    const [newsDataList, setNewsList] = useState<Array<INewsData>>([]);

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

        const cardList  = newsDataList.map( (news:INewsData)=> {
            return <Col  key={news.url}>
                <NewsCard urlToImage={news.urlToImage} title={news.title} url={news.url} key={news.url}/>
            </Col>});
    return (<Container className={styles.newsContainer}>
            <Row className={'flex-row'}>
                    {cardList}
            </Row>
        </Container>
    );
};

export default ActualiWidgetTamplate;

