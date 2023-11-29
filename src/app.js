import './styles/App.css';
import './styles/header.css';
import jsonData from './dummydata.json';
import Items from './items';

const data_items = jsonData.items;

function App() {

  return (
    <main>
      <nav>
        <div className='main_logo'>Timeout</div>
      </nav>
      <section>
        {data_items.map((content) => (
          <Items items={content} type="" />
        ))}
      </section>
    </main >
  );
};

export default App;
