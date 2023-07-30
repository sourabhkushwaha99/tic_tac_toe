import React from 'react'
import './Square.css' 
// import { useState } from 'react'

function Square({value,onsquareclick}) {
    // const [value,setValue] = useState(null) ;
    // function handleonclick(){
    //     setValue('X') ;
    // }

  return (
    <div>
     <button type="button" onClick={onsquareclick}  className={value ? `btn btn-${value===null?'light': (value==='X'? 'primary': 'success')} btn-lg custom` : `btn btn-${value===null?'light': (value==='X'? 'primary': 'success')} btn-lg custom`}>{value}</button>
    </div>
  )
}

export default Square
