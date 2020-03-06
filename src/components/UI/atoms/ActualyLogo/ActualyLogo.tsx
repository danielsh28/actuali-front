import React from  'react';
import styles from './ActualyLogo.module.css'



const ActualyLogo : React.FC<React.HTMLAttributes<HTMLDivElement>> = () =>{

    return  <img  className={styles.logoImage} alt={'logo placeholder'}
                  src={'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png'}/>

};

export default ActualyLogo;
