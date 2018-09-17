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
