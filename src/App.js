
import Boards from './components/Boards';
import { useState } from 'react';
import './style/root.scss'

function App() {

  const [first, setfirst] = useState(false)

  const fun = () => {
    console.log("first time", first)
    setfirst(!first )
    console.log(first)
  }

  return (
    <div className='app'>
    <h1 onClick={fun}>
     Tic Tac Toe
    <Boards/>
    </h1>
    </div>
  );
}

export default App;