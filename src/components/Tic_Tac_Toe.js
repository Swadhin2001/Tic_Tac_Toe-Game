import React,{useState} from 'react'
let flag = false;
function Tic_Tac_Toe() {
  const [turn,setTurn] = useState('X');
  const [result,setResult] = useState(null);
  const [array,setArray]=useState(Array(9).fill(null)); 
  const playAgain=()=>{
    setArray (Array(9).fill(null));
    flag = false;
    setResult(null);
    setTurn('X');
  }

  const click =(num)=>{
    if (flag ) return;
    let a = [...array];
    if (a[num] != null){
      alert ("Already Clicked!");
      return;
    }
    if (turn === 'X'){
      a[num] = 'X';
      setTurn('O');
    } 
    else if (turn === 'O' ){
      a[num] = 'O';
      setTurn('X');
    }
    setArray(a);
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for (let i =0;i<lines.length;i++){
      let [x,y,z] = lines[i];
      if (a[x] && a[x]===a[y] && a[y]===a[z]){
        setResult (a[x]);
        flag = true;
        return;
      }
    }
  }
  const Button =({num})=>{
    return(
    <button className="square" onClick={()=>click(num)}> {array[num]}</button>
    )
  } 
  return (
    <>
    <h1>Tic Tac Toe</h1>
    <div className='board-row'>
      <Button num ={0}/>
      <Button num ={1}/>
      <Button num ={2}/>
    </div>
    <div className='board-row'>
      <Button num ={3}/>
      <Button num ={4}/>
      <Button num ={5}/>
    </div>
    <div className='board-row'>
      <Button num ={6}/>
      <Button num ={7}/>
      <Button num ={8}/>
    </div>
    <h2>Turn : {turn}</h2>
    <h2>Winner : {result}</h2>
    <button className='btn' onClick = {playAgain}>Play Again</button>
    </>
  )
}

export default Tic_Tac_Toe
