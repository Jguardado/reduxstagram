function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':

      //return updated state
      console.log('incrementing likes');
      const i = action.index;
      return [
        ...state.slice(0, i),//before the one we are updating
        { ...state[i], likes: state[i].likes + 1 },//taking a copy of the object
        //we want to alter using object literall (...state) and updating the value
        //on that object with the new information ( in this case by addinga like)
        ...state.slice(i + 1),//after the one we are updating
      ];
    default:
      return state;
  }
}

export default posts;
