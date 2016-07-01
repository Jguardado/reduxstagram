// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index: index,
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMNET',
    postId: postId,
    author: author,
    comment: comment,
  };
}

// remove comment
export function removeComment(postID, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId: postId,
    index: index,
  };
}
