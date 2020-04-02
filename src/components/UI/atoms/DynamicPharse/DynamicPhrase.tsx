import React, {CSSProperties} from 'react';
import styles from './DynamicPharse.module.css';

const DynamicPhrase:React.FC = ()=>{

    return <div className={styles.phrase}>אקטואלי</div>;
};
export  default  DynamicPhrase;