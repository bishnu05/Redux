import {store} from "../Reducer/store";

const CounterValue=()=>{
    const {counter} = store.getState();
    
    return (
        <div>
            <h1>Counter:{counter}</h1>
        </div>
    )
}

export {CounterValue} ;