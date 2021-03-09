import React from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import styles from './CategoriesBar.module.scss'
import {ICategoryData} from "../../molecules/ActualiCards/CategoryCard";
import {RootState} from "../../../../store/configureStore";
import { connect } from "react-redux";
import cx from 'classnames'


enum SIDES{LEFT,RIGHT};
interface IScrollArrow{
    side: SIDES
}
const ScrollArrow : React.FC<IScrollArrow> = ({side} ) => {
return <div className={cx(styles.arrow, side === SIDES.LEFT ?styles.arrowLeft : styles.arrowRight)}>
</div>
}

const ArrowLeft = ScrollArrow({side:SIDES.LEFT});
const ArrowRight = ScrollArrow({side :SIDES.RIGHT});

interface IProps{
    categories : ICategoryData[]
}


const CategoriesBar  : React.FC<IProps> = ({categories})=>{
    const categoryElements = categories.map((cat,index) => {
      return  <div key={index} className={styles.categoryElements}>
          {cat.catName}
       </div>
    });
    return (
      <div>
        <ScrollMenu alignCenter data={categoryElements} arrowLeft={ArrowLeft} arrowRight={ArrowRight} />
      </div>
    );
}


const mapStateToProps = (state: RootState) => ({
    categories: state.fetchDataState.categoriesData,
});

export default connect(mapStateToProps)(CategoriesBar);