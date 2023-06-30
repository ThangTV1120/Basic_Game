import React from 'react'

const GameOver = (props) => {
  const { setGameover, timePlay, Name, settimePlay } = props;
  const handleClick = () => {

    setGameover(false)
    settimePlay(0);
  }
  return (
    <div className='gameover'>
      <span className='gameover_content'> Chuc Mung {Name} da gianh chien thang trong {timePlay}s </span>
      <button onClick={handleClick} className='gameover_btn'>Play Game Again</button>
    </div>
  )
}

export default GameOver
