
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => (data))

export const getCategoryPost = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => (data))

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))

export const getPostComment = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))

export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))



export const addNewPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

export const votePost = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: vote
  }).then(res => res.json())

export const addNewComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const voteComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: vote
  }).then(res => res.json())



export const editPost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(res => console.log(res))

export const editComment = (id, timestamp, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, body })
  }).then(res => console.log(res))


