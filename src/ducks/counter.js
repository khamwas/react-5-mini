const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function increment(num) {
  return {
    type: INCREMENT,
    payload: num
  };
}

export function decrement(num) {
  return {
    type: DECREMENT,
    payload: num
  };
}

const initialState = {
  currentValue: 0
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, currentValue: state.currentValue + action.payload };
    case DECREMENT:
      return { ...state, currentValue: state.currentValue - action.payload };
    default:
      return state;
  }
}

//export default function counter(state={currentValue:0},action){return state}

//line25: ES6 return Object.assign({},state,{currentValue:state.currentValue + action.payload})

//line25: ES8 return {...state,currentValue:state.currentValue + action.payload}
