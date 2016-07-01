function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMNET':

      // return existing state plus teh new comment
      return [...state, {
        user: action.author,
        text: action.comment,
      }, ];
    case 'REMOVE_COMMENT':
      console.log('removing comment');
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ];
    default:
      return state;
  }

  return state;
}

// the purpose of this function is to delegate this repossibility of
// updating teh specfic state to a smaller functon and juts handle the
// the compoition of teh entire state
function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take entire state
      ...state,

      // overwrite this state with the new one
      [action.postId]: postComments(state[action.postId], action),
    };
  }

  return state;
}

export default comments;
