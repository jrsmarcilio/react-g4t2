import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-marcilio-afya.herokuapp.com',
});

// const api = axios.create({
//   baseURL: 'http://localhost:3333',
// });

export default api;
