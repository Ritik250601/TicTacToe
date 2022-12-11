const [board, setBoard] = useState(Array(9).fill(null)); 
const [isNext, setIsNext] = useState(false);

console.log(board)

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