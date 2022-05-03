const redux = require("redux");
const reduxLogger = require("redux-logger");
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();

// Come back and refactor above according to link below
// https://redux.js.org/introduction/why-rtk-is-redux-today

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

// Define action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: "First redux action",
  };
}

// Reducers translate actions to state changes
// Accept state and action.  Returns new state

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(buyIceCream());

store.dispatch(buyIceCream());

unsubscribe();
