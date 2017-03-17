// reducer takes in 2 things:

// 1. the action (info about what happened)
// 2. copy of current state

// comes in: action, store (state)
// ok, let me see
// return updated store

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LINKES' :
      // return the updated state
      console.log("Incrementing LIKES!!!")
      const i = action.index;
      return [
        ...state.slice(0,i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //after the one we are updating
      ]
    default:
      return state;
  }
  return state;
}

export default posts;
