import { useState } from "react";
import { handleDecrement, handleIncrement } from "../Reducer/action";
import { store } from "../Reducer/store";

const CounterButton=()=>{
    const {dispatch} = store;
    const [set,setState] = useState(0);
    const forceUpdate = ( ) => setState(prev=>prev+1)
    
    return(
        <div>
            <button onClick={()=>{
        dispatch(handleIncrement())
         //setState((prev)=>prev+1);
      }}>Increment</button>
      <button onClick={()=>{
        dispatch(handleDecrement())
         //setState((prev)=>prev-1);
        }}>Decrement</button>
        </div>
    )
}

export {CounterButton}