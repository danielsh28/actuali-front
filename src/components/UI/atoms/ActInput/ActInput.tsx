import React from "react";
import styles from './ActInput.module.scss';

interface IActInput extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    placeholder : string,
    label?: string,
    value : string
}

const ActInput : React.FC<IActInput> = ({placeholder,label,id,onChange,value}) => {

    return(
        <div id={id} className={styles.main}>
            {label && <div className={styles.label}> {label}</div>}
        <input value={value} onChange={onChange}  className={styles.input} type={'text'} placeholder= {placeholder}/>
    </div>
    );
}

export default ActInput;
