import React, {CSSProperties} from 'react';

const phraseStyle :CSSProperties= {
     font:'arial',
    fontSize:'30px',

}

const DynamicPhrase:React.FC = ()=>{

    return <p style={phraseStyle}>אקטואלי</p>;
};
export  default  DynamicPhrase;