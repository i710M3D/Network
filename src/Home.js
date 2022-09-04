
import { useState } from 'react';
import Content from './Content';

import Filter from './filter';

const Home = ({FunNav,side}) => {
    FunNav(true);
    const [hr,sethr] = useState(true);
    return (
        <div className="App  w-full h-full relative  ">
           
            <Filter hr={hr} Funhr={sethr} />
            <Content side={side} hr={hr} />
            
        </div>
    );
}

export default Home;