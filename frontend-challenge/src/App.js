import './App.css';
import {Routes, Route} from 'react-router-dom'
import ScoreBoard from './pages/scoreboard';
import RajaOngkir from './pages/rajaongkir';
import Formation from './pages/formation';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ScoreBoard />}/>
        <Route path='/rajaongkir' element={<RajaOngkir />}/>
        <Route path='/formation' element={<Formation />}/>
      </Routes>
    </div>
  );
}

export default App;
