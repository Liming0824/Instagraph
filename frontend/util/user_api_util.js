export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: user,
    contentType: false,
    processData: false
  });
};


export const searchUsers = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/search',
    data: {
      query: query
    }
  });
};

// this is a test api ajax function
export const searchUsersByIds = (id_arr) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/search_by_ids',
    data: {
      arr: id_arr
    }
  });
};
// test over
