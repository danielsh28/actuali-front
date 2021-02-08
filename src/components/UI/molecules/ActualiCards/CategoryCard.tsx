import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styles from './CategoryCard.module.scss';
import { toggleUserChoice } from '../../../../store/actions/UserStatusActions';
import { RootState } from '../../../../store/configureStore';
import { UsersChoicesMap } from '../../../../AppTypes';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';

const checkedIcon = require('../../../../assets/images/check-mark.svg');

export interface ICategoryData {
  catName: string;
  urlToImage: string;
  setUserChoice: Function;
  categories: UsersChoicesMap;
}

const CategoryCard: React.FC<ICategoryData> = ({ catName, urlToImage, setUserChoice, categories }) => {
  function markCategory(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    setUserChoice(catName);
  }

  return (
    <div key={catName} className={styles.main} onClick={markCategory}>
      <img className={styles.categoryImg} alt={'category-card'} src={urlToImage} />
      <Button
        className={cx(`${styles.overlay}`, `${categories.indexOf(catName) !== -1 ? styles.chosen : styles.notChosen}`)}
      >
        {catName}
        {categories.indexOf(catName) !== -1 && (
          <img className={styles.checkedIcon} alt={'checked-icon'} src={checkedIcon} />
        )}
      </Button>
    </div>
  );
};
const mapeStateToPropse = (state: RootState) => ({
  categories: state.userStatus.categories,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUserChoice: (catName: string) => dispatch(toggleUserChoice(catName)),
});

export default connect(mapeStateToPropse, mapDispatchToProps)(CategoryCard);
