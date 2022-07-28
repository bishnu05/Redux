import * as data from "./ActionTypes";

const initState={
    counter:3,
    data:10,
}

const reducer=(oldState=initState,action)=>{
    const {type,payload} = action
    switch (type) {
        case data.INCREMENT:
            return {...oldState,counter:oldState.counter + payload};
        case data.DECREMENT :
            return {...oldState,counter:oldState.counter- payload};
        default:
            return oldState;
    }
};

export {reducer} ;