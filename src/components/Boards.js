import React, { useState } from 'react';
import Square from './Square';

const Boards = () => {
const [board, setBoard] = useState(Array(9).fill(null)); 
const [isNext, setIsNext] = useState(false);

const handleSquareClick =  (position) => {
if(board[position]){
  return;
}

  setBoard( (prev) =>{
    return prev.map((square, pos) => {
      if(pos === position){
        return isNext ? 'X' : '0';
      }
      return square;
    });
     
  });

  setIsNext((prev) => !prev)

}
console.log(board)

const renderedSquare = (position) => {
  return <Square value={board[position]} onClick={() => {
    handleSquareClick(position);
  }}/>
}

console.log(board)
  return (
    <div className='board'>
      <div className='board-row'>
        {renderedSquare(0)}
        {renderedSquare(1)}
        {renderedSquare(2)}

      
      </div>
      <div className='board-row'>
      {renderedSquare(3)}
        {renderedSquare(4)}
        {renderedSquare(5)}

      </div>
      <div className='board-row'>
      {renderedSquare(6)}
        {renderedSquare(7)}
        {renderedSquare(8)}

      </div>
    </div>
  );
};

export default Boards;
