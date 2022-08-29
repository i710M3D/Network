
import Content from './Content';

import Filter from './filter';

const Home = ({FunNav}) => {
    FunNav(true);
    return (
        <div className="App  w-full h-full relative  ">
           
            <Filter />
            <Content />
            
        </div>
    );
}

export default Home;