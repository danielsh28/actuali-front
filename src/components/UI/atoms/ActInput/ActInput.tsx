import React from "react";
import styles from './ActInput.module.scss';

interface IActInput {
    placeholder : string,
    label: string
}

const ActInput : React.FC<IActInput> = ({placeholder,label}) => {

    return(
        <div className={styles.main}>
         <div className={styles.label}> {label}</div>
        <input  className={styles.input} type={'text'} placeholder= {placeholder}/>
    </div>
    );
}

export default ActInput;
