import jsonData from '../data/dummydata.json';
import Items from '../components/Items';
import SideBar from '../components/SideBar';
import Add from '../features/Add';

const data_items = jsonData.items;

const Home = () => {
    return (
        <main>
            <nav><SideBar /></nav>
            <section>
                <Items tasks={data_items} />
                <Add name={'+'} />
            </section>
        </main>
    );
}

export default Home;
