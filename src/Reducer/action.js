const handleIncrement=()=>{
   return {type:"INCREMENT",payload:1};
    //console.log(store.getState)
    // setCounter((temp)=>{
    //     return temp+1
    // })
  }
  const handleDecrement=()=>{
    //setCounter((prev)=>prev-1)
    return {type:"DECREMENT",payload:1}
    //console.log(store.getState)
  }

  export {handleIncrement,handleDecrement};