import React from 'react'
import { postCard } from './service/CardAPI';

const GameOver = (props) => {
  const { setGameover, timePlay, Name, settimePlay,getCard } = props;
  const handleClick = async () => {
    
    // let resuls = await fetAllCard();


    let res =await postCard(Name,timePlay);
    console.log(res)
    if(res&&res.data){
      getCard();
      setGameover(false)
      settimePlay(0);
    }
   
  }
  return (
    <div className='gameover'>
      <span className='gameover_content'> Chuc Mung {Name} da gianh chien thang trong {timePlay}s </span>
      <button onClick={handleClick} className='gameover_btn'>Play Game Again</button>
    </div>
  )
}

export default GameOver
