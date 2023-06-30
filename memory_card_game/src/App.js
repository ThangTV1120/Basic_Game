import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Bear from './images/Bear.jpg';
import Cat from './images/Cat.jpg';
import Dog from './images/Dog.jpg';
import Duck from './images/Duck.jpg';
import Elephants from './images/Elephants.jpg';
import Fox from './images/Fox.jpg';
import Panda from './images/Panda.jpg';
import Tiger from './images/Tiger.jpg';
import GameOver from './GameOver';
import Watch from './Watch';
function App() {
  const values = [Bear, Cat, Dog, Duck, Elephants, Fox, Panda, Tiger];
  const [selectcard, setSelectcard] = useState([]);
  const [card, setCard] = useState([]);
  const [socer, setSocer] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isTime, setIsTime] = useState(false);
  const [timePlay, settimePlay] = useState(0);
  const [Name, setName] = useState("");

  const begin = () => {
    const sort = [...values, ...values].sort(() => Math.random() - 0.5);
    const result = sort.map((value, index) => ({ value, flipped: false, id: index + 1 }));

    // const res = result.map((item) => { return { ...item, flipped: false } });

    setCard(result);
    setSocer(0);
  }
  const check = () => {
    if (selectcard[0].value === selectcard[1].value && selectcard[0].id !== selectcard[1].id) {
      setSocer((e) => e + 1);
      // setIsclass(true)
      let cardss = card.map((card) => {
        if (card.value === selectcard[0].value) {
          return { ...card, flipped: true }
        }
        return card;
      })
      setCard(cardss);
    }
    // console.log(card);
    // console.log(selectcard);
  }
  const restgame = () => {
    begin();
    setSelectcard([]);
    settimePlay(0);
    // console.log(timePlay)
  }
  const outgame = () => {
    setIsName(false);
    setIsTime(false);
    setName("")
    restgame();
  }
  const handlerName = (envent) => {
    setName(envent.target.value);
    // console.log(Name)
  }
  const handlerStart = () => {
    if (Name) {
      setIsName(true);
      setIsTime(true);
    }
    else {
      alert("Vui long nhap ten nguoi choi")
    }
  }
  useEffect(() => {
    begin();
  }, [])
  useEffect(() => {
    if (selectcard.length === 2) {
      setTimeout(() => {
        setSelectcard([]);
      }, 1000)
      check();
    }

  }, [selectcard])
  useEffect(() => {
    if (socer === 8) {
      // console.log("Game over")
      begin()
      setGameover(true)
    }
  }, [socer])
  return (
    <>{!isName ?
      <div className='start'>
        <input type="text" className='start_playername' value={Name} placeholder='Nhap ten nguoi choi' onChange={(envent) => { handlerName(envent) }} />
        <button className='start_btn' onClick={() => { handlerStart() }}>Start Game </button>
      </div>
      :
      <>
        {gameover ?
          <GameOver
            setGameover={setGameover}
            Name={Name}
            settimePlay={settimePlay}
            timePlay={timePlay} />
          :
          <>
            <div className='head'>
              <div className='head_playername'>
                <span className='head_playername--text'>Wellcome {Name}</span>
              </div>
              <div className='head_timeplay'>
                <Watch
                isTime={isTime}
                timePlay={timePlay}
                settimePlay={settimePlay}
                >

                </Watch>
                </div>
              <div className='head_btn'>
                <button className='head_btn-out' onClick={outgame}>
                  Out Game
                </button>
                <button className='head_btn-restgame' onClick={restgame}>
                  Rest Game
                </button>
              </div>

            </div>
            <div className='Game'>
              <div className='col'>
                {card.map((item, index) => {
                  // console.log(index.flipped)
                  return (
                    <>
                      <Card
                        show={item}
                        id={index}
                        // restgame={restgame}
                        // isclass={isclass}
                        setSelectcard={setSelectcard}
                        selectcard={selectcard}
                        
                      />
                    </>
                  )
                })}
              </div>
            </div></>}
      </>
    }


    </>
  );
}

export default App;
