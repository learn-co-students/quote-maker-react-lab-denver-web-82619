export default (state = [], action) => {
  let index
  
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      index = state.findIndex(quote => quote.id === action.id)
      return [...state.slice(0, index), ...state.slice(index + 1)]
    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.id)
      const upvotedQuote = { 
        ...state[index], 
        votes: state[index].votes + 1 
      }
      return [...state.slice(0, index), upvotedQuote, ...state.slice(index + 1)]
    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.id)
      const downvotedQuote = { 
        ...state[index], 
        votes: state[index].votes - 1 
      }
      return [...state.slice(0, index), downvotedQuote, ...state.slice(index + 1)]
    default:
      return state;
  }
}
