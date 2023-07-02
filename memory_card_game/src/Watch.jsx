import React, { useState, useEffect } from 'react'

export default function Watch(props) {
    const {isTime,timePlay,settimePlay}=props
    // const [timer, setTimer] = useState(timePlay);
    const [isActive, setIsActive] = useState(isTime);
    // console.log(timer)
    // const countRef = useRef(null);
    // settimePlay(timer)
    const handleStart = () => {

       
    }
    useEffect(() => {
    //   handleStart();
      let countRef;
      if(isActive){
          countRef = setInterval(() => {
            settimePlay((timer) => timer + 1);
             
          }, 1000)
          
      }
      return ()=>{
          clearInterval(countRef)
      } 
        
    }, [isActive])
    return (
        
            <div className='watch'>
                <p className='watch_card'>{timePlay}s</p> {/* here we will show timer */}
            </div>
        
    )
}
