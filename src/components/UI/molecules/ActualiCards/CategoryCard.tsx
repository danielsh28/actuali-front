import React, {useState} from 'react';
import {Dispatch} from 'redux'
import {connect} from "react-redux";
import styles from './CategoryCard.module.scss';
import {toggleUserChoice} from "../../../../store/actions/UserStatusActions";

const checkedIcon = require('../../../../assets/images/check-mark.svg');



export interface ICategoryData{
    catName: string,
    urlToImage: string,
    setUserChoice: Function
}

const CategoryCard : React.FC<ICategoryData>  = ({catName,urlToImage,setUserChoice}) => {
    const [isClicked,setIsClicked] = useState(false);

    function markCategory(e:React.MouseEvent<HTMLInputElement>){
        e.preventDefault();
        setUserChoice(catName);
        setIsClicked(!isClicked);
    }

    return(
    <div  key={catName} className={styles.main} onClick={markCategory}>
        <img className={styles.categoryImg} alt={'category-card'} src={urlToImage}/>
            <button className={`${styles.overlay} ${isClicked ? styles.chosen : styles.notChosen}`}>
                {catName}
                {isClicked && <img className={styles.checkedIcon} alt={'checked-icon'} src={checkedIcon}/>}
            </button>
    </div>
    )

}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setUserChoice: (catName: string) => dispatch(toggleUserChoice(catName))
})


export default  connect(null,mapDispatchToProps)(CategoryCard);