import React, {CSSProperties} from 'react';

const phraseStyle :CSSProperties= {
     font:'arial'
}

const DynamicPhrase:React.FC = ()=>{

    return <p style={phraseStyle}>some phrase</p>;
};
export  default  DynamicPhrase;