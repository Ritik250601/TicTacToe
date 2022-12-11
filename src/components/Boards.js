import React, { useState } from 'react';
import Square from './Square';

const Boards = (props) => {


const renderedSquare = (position) => {
  return <Square value={props.board[position]} onClick={() => {
    props.handleSquareClick(position);
  }}/>
}

console.log(props.board)
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
