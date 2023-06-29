import React,{ useState } from 'react'

export default function Square(props) {
    // const [value, setValue] = useState(null);
    const {value,hanlerclick}=props;
 
  return (
    <div>
       <button className="square" onClick={hanlerclick}>{value}</button>
    </div>
  )
}
