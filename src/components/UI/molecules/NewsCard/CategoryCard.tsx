import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import styles from  './CategoryCard.module.css'



export interface ICategoryData {
    category: string;
    imageUrl: string

}

const CategoryCard : React.FC<ICategoryData>  = ({category,imageUrl}) => {

    return(
    <Card className ={styles.categoryHover} onMouseEnter = {()=>{}} onMouseLeave = {()=>{}}>
    <Card.Img src={imageUrl}/>
        <Card.ImgOverlay>
        </Card.ImgOverlay>
    </Card>
    )

}