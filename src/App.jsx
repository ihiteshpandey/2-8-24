import React,{useState} from 'react';
import Navbar from './components/navbar';
import ToggleSwitch from './components/toggleSwitch';
import Tracker from '../../stayfree-clone/src/components/Tracker/tracker';


function App() {

  //const [lists,setLists] = useState(); 
  return (
      
   <div className="">
      <Navbar/>
      <div>
      <ToggleSwitch/>
      </div>
      <Tracker/>
      <h3>Stayfree</h3>
    </div>

  );
}

export default App;

