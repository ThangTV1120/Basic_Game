// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Square from './Square';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [IsNext, setIsNext] = useState(true);
  const hanlerclick = (i) => {
    const nextSquares = squares.slice();
    if (squares[i] || checkWiner(squares)) return;
    // if (squares.includes(null)) console.log("Have null")
    // else console.log("Ko con null")
    if (IsNext) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    // console.log(nextSquares);
    setSquares(nextSquares);
    setIsNext(!IsNext);
  }
  const checkWiner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = checkWiner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    if (squares.includes(null)) {
      status = "Next player: " + (IsNext ? "X" : "O");
    }
    else
      status = "Game over";
  }
  const restGame= () =>{
    setSquares(Array(9).fill(null));
    setIsNext(true)
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className='tic_tac_toec'>

        <div className="board-row">

          <Square value={squares[0]} hanlerclick={() => hanlerclick(0)}></Square>
          <Square value={squares[1]} hanlerclick={() => hanlerclick(1)}></Square>
          <Square value={squares[2]} hanlerclick={() => hanlerclick(2)}></Square>
        </div>
        <div className="board-row">
          <Square value={squares[3]} hanlerclick={() => hanlerclick(3)}></Square>
          <Square value={squares[4]} hanlerclick={() => hanlerclick(4)}></Square>
          <Square value={squares[5]} hanlerclick={() => hanlerclick(5)}></Square>
        </div>
        <div className="board-row">
          <Square value={squares[6]} hanlerclick={() => hanlerclick(6)}></Square>
          <Square value={squares[7]} hanlerclick={() => hanlerclick(7)}></Square>
          <Square value={squares[8]} hanlerclick={() => hanlerclick(8)}></Square>
        </div>
      </div>
      <div  className='rest'>
        <div className='restgame' onClick={()=>restGame() }>Rest game</div>
      </div>
      
    </>
  );
}
// function Square
export default App;
