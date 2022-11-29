// Initial State
const defaultWagon = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

// Redux Reducer for managing the game's state
export const reducer = (state = defaultWagon, action) => {
  switch (action.type) {
    case "gather":
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    case "travel":
      return state.supplies - action.payload < 0
        ? state
        : {
            ...state,
            supplies: state.supplies - 20 * action.payload,
            distance: action.payload * 10,
            days: state.days + action.payload,
          };
    case "tippedWagon":
      return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance + 0,
        days: state.days + 1,
      };
    case "sell":
      return state.supplies - 20 < 0
        ? state
        : {
            ...state,
            supplies: state.supplies - 20,
            cash: state.cash + 5,
          };
    case "buy":
      return state.cash <= 15
        ? state
        : {
            ...state,
            supplies: state.supplies + 25,
            cash: state.cash - 15,
          };
    case "theft":
      return {
        ...state,
        cash: state.cash / 2,
      };
    default:
      return state;
  }
};
