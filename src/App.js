import './App.css';
//import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <div className='nav'>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </div>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
