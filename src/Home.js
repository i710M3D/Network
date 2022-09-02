
import Content from './Content';

import Filter from './filter';

const Home = ({FunNav,side}) => {
    FunNav(true);
    return (
        <div className="App  w-full h-full relative  ">
           
            <Filter />
            <Content side={side} />
            
        </div>
    );
}

export default Home;