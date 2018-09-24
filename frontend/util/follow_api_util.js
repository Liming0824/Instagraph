export const createFollow = (followee_id) =>{
  return $.ajax({
    method: 'POST',
    url: `api/users/${followee_id}/follows`
  });
};



export const destroyFollow = (followee_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${followee_id}/follows`
  });
};


export const updateFollow = (follower_id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${follower_id}/follows`
  });
};
