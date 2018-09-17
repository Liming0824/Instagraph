export const createLike = (post_id) =>{
  return $.ajax({
    method: 'POST',
    url: `api/posts/${post_id}/likes`
  });
};


export const destroyLike = (post_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${post_id}/likes`
  });
};
