import {useState} from "react";
import "./App.css";
import { CounterButton } from "./Counter/CounterButton";
import { CounterValue } from "./Counter/CounterValue";
import {useSelector,useDispatch} from "react-redux";
import {store} from "./Reducer/store"


function App() {
//   const {dispatch} = store;
//   const {counter} = store.getState();
//  const [set,setState] = useState(0);

const counter = useSelector((store)=>store.counter)
const dispatch = useDispatch()


//  store.subscribe(()=>{
//   setState((prev)=>prev+1);
//  });
//   console.log(counter)
  return (
    <div>
      <CounterValue />
      <CounterButton/>
   </div>
  );
}

export default App;
