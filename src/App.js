import './App.css';
import { createContext } from 'react';
import { Compnent1 } from './Component/Compnent1';


export const NameContext = createContext();

function App() {
  let name = "Ridwan"
  return (

    <NameContext.Provider value= {name}>
    <div className="App">
      <Compnent1 />
    </div>
    </NameContext.Provider>
  );
}

export default App;
