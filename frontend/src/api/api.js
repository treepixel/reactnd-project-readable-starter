const api = 'http://localhost:3001';

export function getInitialData() {
  return Promise.all([getCategories(), getPosts()]).then(
    ([categories, posts]) => ({
      categories,
      posts
    })
  );
}

const headers = {
  Authorization: '1234',
  'Content-Type': 'application/json'
};

function getCategories() {
  return new Promise((res, rej) => {
    fetch(`${api}/categories`, { headers })
      .then(response => response.json())
      .then(data => data.categories)
      .then(res)
      .catch(rej);
  });
}

function getPosts() {
  return new Promise((res, rej) => {
    fetch(`${api}/posts`, { headers })
      .then(response => response.json())
      .then(res)
      .catch(rej);
  });
}

export function getCommentsByPost(id) {
  return new Promise((res, rej) => {
    fetch(`${api}/posts/${id}/comments`, { headers })
      .then(response => response.json())
      .then(res)
      .then(rej);
  });
}

export function saveComment(data) {
  return new Promise((res, rej) => {
    fetch(`${api}/comments`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res)
      .then(rej);
  });
}

export function deleteComment(id) {
  return new Promise((res, rej) => {
    fetch(`${api}/comments/${id}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(response => response.json())
      .then(res)
      .then(rej);
  });
}
