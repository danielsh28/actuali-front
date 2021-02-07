import React from "react";
import NewsContainer from "../../UI/organisms/NewsContainer/NewsContainer";
import ActualiUserHeader from "../../UI/organisms/Header/ActualiUserHeader";


const NewsDashboard: React.FC = () => {

    return (
        <div className={'newsDashboard'}>
        <ActualiUserHeader />
        <NewsContainer />
    </div>
    )
}

export default NewsDashboard;

