export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `api/posts/${comment.post_id}/comments`,
    data: {
      comment: comment
    }
  });
};

export const destroyComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  });
};
