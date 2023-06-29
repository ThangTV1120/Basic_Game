import React from 'react'

const GameOver = (props) => {
    const handleClick =()=>{
        props.setGameover(false)
    }
  return (
    <div className='gameover'>  <button onClick={handleClick} >Play Game Again</button></div>
  )
}

export default GameOver
