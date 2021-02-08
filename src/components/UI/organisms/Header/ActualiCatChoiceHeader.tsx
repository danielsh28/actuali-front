import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import styles from './ActualiUserHeader.module.scss';
import { MIN_CATEGORIES_NUM } from '../../../../utils/app-constants';
import { RootState } from '../../../../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { clearData } from '../../../../store/actions/DataFetchingActions';
import { UsersChoicesMap } from '../../../../AppTypes';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { changeUserStatusToExist } from '../../../../store/actions/UserStatusActions';

interface ISUHeaderProps {
  categories: UsersChoicesMap;
  changeToExistUser: () => void;
  clearData: () => void;
}
const ActualiCatChoiceHeader: React.FC<ISUHeaderProps> = ({ clearData, categories, changeToExistUser }) => {
  const history = useHistory();

  const handleCatSubmit = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (categories.length >= MIN_CATEGORIES_NUM) {
      clearData();
      history.push('/userDashboard');
      changeToExistUser();
    }
  };

  return (
    <>
      {
        <>
          <h1>Actuali</h1>
          <h1 className={styles.headerContent}>
            <div id={styles.chosenCategories}> {categories.length} </div>
            <div id={styles.userGuide}> אנא בחר לפחות 3 נושאים על מנת שנוכל להתאים את אקטואלי במיוחד עבורך</div>
          </h1>
          <Button variant={'primary'} onClick={handleCatSubmit} className={styles.submitCatButton}>
            המשך לפרופיל
          </Button>
        </>
      }
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  categories: state.userStatus.categories,
  isLogin: state.userLoginStatus.isLogin,
  userStatus: state.userStatus.status,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => ({
  clearData: () => dispatch(clearData()),
  changeToExistUser: () => dispatch(changeUserStatusToExist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActualiCatChoiceHeader);
