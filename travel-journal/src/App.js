import './App.css';
import Header from './components/Header'
import Locations from './components/Locations'
import data from './components/data'

const travelEntries = data.map(travelEntry => <Locations data={travelEntry}/>)

function App() {
  return (
    <div className="App">
      <Header/>
      {travelEntries}
    </div>
  );
}

export default App;
