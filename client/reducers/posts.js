// reducer takes in 2 things:

// 1. the action (info about what happened)
// 2. copy of current state

// comes in: action, store (state)
// ok, let me see
// return updated store

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}

export default posts;
