import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID adaa8bd24d7cfae1eb3a4c82dad59123745bcb1dde16067577350750e524a402'
  }
});
