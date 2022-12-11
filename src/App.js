
import Boards from './components/Boards';
import { useState } from 'react';
import './style/root.scss'
import { calculateWinner } from './helpers';

function App() {

  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [isNext, setIsNext] = useState(false);
  
 const winner = calculateWinner(board);
const message = winner ? `Winner is ${winner}` : `Next Player is ${isNext ? 'O' : 'X'}`;

 console.log(winner)

  console.log(board)
  
  const handleSquareClick =  (position) => {
  if(board[position] || winner){
    return;
  }
  
    setBoard( (prev) =>{
      return prev.map((square, pos) => {
        if(pos === position){
          return isNext ? 'O' : 'X';
        }
        return square;
      });
       
    });
  
    setIsNext((prev) => !prev)
  
  }
  console.log(board)



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
    </h1>
    <h3>{message}</h3>
    <Boards handleSquareClick={handleSquareClick} board={board}/>
    </div>
  );
}

export default App;