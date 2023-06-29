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
function App() {
  const values = [Bear, Cat, Dog, Duck, Elephants, Fox, Panda, Tiger];
  const [selectcard, setSelectcard] = useState([]);
  const [card, setCard] = useState([]);
  const [socer, setSocer] = useState(0);
  const [gameover, setGameover] = useState(false);
  // const [isrest, setIsrest] = useState(false);

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
    <>
      {gameover ?
        <GameOver
          setGameover={setGameover} />
        :
        <>
          <div className='restgame'><button className='btn_restgame'  onClick={restgame}>
            Rest Game
          </button></div>
          <div className='Game'>
            <div className='col_1'>
              {card.map((index) => {
                // console.log(index.flipped)
                return (
                  <>
                    <Card
                      show={index}
                      id={index.id}
                      // restgame={restgame}
                      // isclass={isclass}
                      setSelectcard={setSelectcard}
                      // setIsclass={setIsclass}
                      selectcard={selectcard}
                    />
                  </>
                )

              })}
            </div>

            {/* {socer.length===0 ?  console.log(socer.length) : "" } */}
            {/* <div className='col_4'>
          <Card
            show={Bear}
            id="Bear"
          />
          <Card
            show={Cat}
            id="Cat"
          />
          <Card
            show={Dog}
            id="Dog"
          />
          <Card
            show={Duck}
            id="Duck"
          />
        </div> */}
          </div></>}

    </>
  );
}

export default App;
