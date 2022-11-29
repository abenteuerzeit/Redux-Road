import { reducer } from './GameManager.js';

// Log Game Play Function Output
let wagon = reducer(undefined, {});
console.log(wagon);

wagon = reducer(wagon, {
  type: "travel",
  payload: 1,
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "gather",
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "tippedWagon",
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "travel",
  payload: 3,
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "buy",
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "sell",
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "theft",
});
console.log(wagon);
