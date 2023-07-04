import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Booking from './components/Booking';
function App() {
  return (
   <Routes>
   
   <Route exact path= '/' element = {<Home/>}/>
   <Route exact path= '/contact' element = {<Contact/>}/>
   <Route exact path= '/services' element = {<Services/>}/>
   <Route exact path= '/booking' element = {<Booking/>}/>
    
   </Routes>
  );
}

export default App;
