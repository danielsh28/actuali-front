import React from 'react';
import NewsContainer from '../../UI/organisms/NewsContainer/NewsContainer';
import ActualiUserHeader from '../../UI/organisms/Header/ActualiUserHeader';
import CategoriesBar from "../../UI/organisms/CategoriesBar/CategoriesBar";
import styles from './NewsDashboard.module.scss';

const NewsDashboard: React.FC = () => {
  return (
    <div className={styles.main}>
      <ActualiUserHeader />
      <CategoriesBar />
      <NewsContainer />
    </div>
  );
};

export default NewsDashboard;
