import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Tech from './pages/Tech/Tech.';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app_container'>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/destination/:name' element={<Destination/>}/>
          <Route path='/crew/:id' element={<Crew/>}/>
          <Route path='/tech/:id' element={<Tech/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App