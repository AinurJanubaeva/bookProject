import { useState } from 'react';
import './App.css';
import { Route } from './components/router/Route';
function App() {

  const [text,setText]=useState(40)
  const [state,setStae]=useState(false)
console.log(text);

  
const clcikText = ()=>{
  setText(65)
  setStae(true)
  
}
const clcikADD = ()=>{
  setStae(false)
}

  return (
    <div className="App">
        <h1>APP</h1>
        <button onClick={clcikText}>click</button>
        <button onClick={clcikADD}>ADD</button>
         {text}
        {state===true? <Route/>: " ....loading"}
    </div>
  );
}

export default App;
