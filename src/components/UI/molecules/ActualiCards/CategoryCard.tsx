import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import {Dispatch} from 'redux'
import {connect} from "react-redux";
import styles from  './CategoryCard.module.css';
import {addToUserChoices} from "../../../../store/actions/UserStatusActions";
import {Button} from "react-bootstrap";

const checkedIcon = require('../../../../assets/images/check-mark.svg');



export interface ICategoryData{
    catName: string;
    urlToImage: string,
    setUserChoice: Function

}

const CategoryCard : React.FC<ICategoryData>  = ({catName,urlToImage,setUserChoice}) => {
    const [isClicked,setIsClicked] = useState(false);
    function markCategory(e:React.MouseEvent<HTMLInputElement>){
        setUserChoice(catName);
        setIsClicked(!isClicked)
    }
    return(
    <Card  className ={styles.main} onClick={markCategory}>
        <Card.Img className={styles.categoryImg} src={urlToImage}/>
        <Card.ImgOverlay>
            <Button className={`${styles.overlay} ${isClicked ? styles.chosen : styles.notChosen}`}>
                {catName}
                {isClicked && <img className={styles.checkedIcon} src={checkedIcon}/>}
            </Button>
        </Card.ImgOverlay>
    </Card>
    )

}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setUserChoice: (catName: string) => dispatch(addToUserChoices(catName))
})


export default  connect(null,mapDispatchToProps)(CategoryCard);