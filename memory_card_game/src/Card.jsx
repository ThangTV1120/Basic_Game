import { useEffect, useState } from "react";
import React from 'react'
import hoicham from './images/hoicham.jpg'
export default function Card(props) {
    const { show, id, isclass, setSelectcard, restgame, selectcard } = props;
    const [isFlipped, setIsFlipped] = useState(show.isFlipped);


    const handleClick = () => {
        // setIsFlipped(!isFlipped);
        setSelectcard([...selectcard, show]);
        if (isFlipped) alert("The da dc chon")
    };
    useEffect(() => {

        if (selectcard[0] === show || selectcard[1] === show || show.flipped) {
            setIsFlipped(true);
        }
        else {
            setIsFlipped(false);
        }
    }, [selectcard])
    // restgame = () => {
    //     setIsFlipped(false);
    // }
    return (
        <>
            <div className="flip-container " onClick={handleClick} key={id}>
                {/* <div className={`flipper ${isFlipped ? 'flipped' : ''}`}> */}
                {isFlipped ?
                    <div className={`Card`} >
                        <img src={show.value} alt="" className='image' />
                    </div> :
                    <div className="back">
                        <img src={hoicham} className="image" alt="Mặt sau" />
                    </div>
                }


                {/* </div> */}
            </div>

        </>

    )
}
