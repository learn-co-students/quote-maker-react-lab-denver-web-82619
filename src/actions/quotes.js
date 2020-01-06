export function addQuote(quote) {
  return {
    type: "ADD_QUOTE",
    quote
  }
}

export function removeQuote(id) {
  return {
    type: "REMOVE_QUOTE",
    id
  }
}

export function upvoteQuote(id) {
  return {
    type: "UPVOTE_QUOTE",
    id
  }
}

export function downvoteQuote(id) {
  return {
    type: "DOWNVOTE_QUOTE",
    id
  }
}

export default {
  addQuote,
  removeQuote,
  upvoteQuote,
  downvoteQuote
}