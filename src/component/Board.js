import React from 'react'
import Square from './Square'
import { useState } from 'react'
import './Board.css'

function Board() {
    const [xisnext,setXisnext] = useState(true) ;
 const [square,setSquare] = useState(Array(9).fill(null)) ;

 function handletryagain(){
//    setSquare(square.fill(null)) ;

   window.location.reload();
 }

 const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (xisnext ? "X" : "O");
  }

 function handleclick(i){
    if(square[i] || calculateWinner(square)) return ;

    // const nextSquare = square.slice() ;
    if(xisnext){
        // nextSquare[i] = 'X' ;
        square[i] = 'X' ;

    }else{
        // nextSquare[i] = 'O' ;
        square[i] = 'O' ;
    }

    // setSquare(nextSquare) ;
    setSquare(square) ;
    setXisnext(!xisnext) ;
 }

  return (
    <>
    {/* <div className="d-flex align-items-center justify-content-center"> */}
    <div className=" align-items-center justify-content-center m-3 ">
    <div id="status" className="d-flex justify-content-center m-3">{status}</div>

    <div className="d-flex align-items-center justify-content-center">
        <Square color={(square[0]==='X'? 'primary': 'success')} value={square[0]} onsquareclick={() => handleclick(0)}/>
        <Square color={(square[1]==='X'? 'primary': 'success')} value={square[1]} onsquareclick={() => handleclick(1)}/>
        <Square color={(square[2]==='X'? 'primary': 'success')} value={square[2]} onsquareclick={() => handleclick(2)}/>
    </div>
    <div className="d-flex align-items-center justify-content-center ">
        <Square color={(square[3]==='X'? 'primary': 'success')} value={square[3]} onsquareclick={() => handleclick(3)}/>
        <Square color={(square[4]==='X'? 'primary': 'success')} value={square[4]} onsquareclick={() => handleclick(4)}/>
        <Square color={(square[5]==='X'? 'primary': 'success')} value={square[5]} onsquareclick={() => handleclick(5)}/>
    </div>
    <div className="d-flex align-items-center justify-content-center">
        <Square color={(square[6]==='X'? 'primary': 'success')} value={square[6]} onsquareclick={() => handleclick(6)}/>
        <Square color={(square[7]==='X'? 'primary': 'success')} value={square[7]} onsquareclick={() => handleclick(7)}/>
        <Square color={(square[8]==='X'? 'primary': 'success')} value={square[8]} onsquareclick={() => handleclick(8)}/>
    </div>
    </div>
    <div className="d-flex align-items-center justify-content-center m-3">

    <button type="button" onClick={handletryagain} className="btn btn-dark ">Try Again</button>

    </div>

    {/* </div> */}
    </>
  )
}


function calculateWinner(square) {
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
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

export default Board
