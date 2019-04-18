const api = 'http://localhost:3001';

export function getInitialData() {
  return Promise.all([getCategories(), getPosts()]).then(
    ([categories, posts]) => ({
      categories,
      posts
    })
  );
}

let config = {
  method: 'GET',
  headers: new Headers({ Authorization: '1234' }),
  mode: 'cors'
};

function getCategories() {
  return new Promise((res, rej) => {
    fetch(`${api}/categories`, config)
      .then(response => response.json())
      .then(data => data.categories)
      .then(res)
      .catch(rej);
  });
}

function getPosts() {
  return new Promise((res, rej) => {
    fetch(`${api}/posts`, config)
      .then(response => response.json())
      .then(res)
      .catch(rej);
  });
}
