import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 15bb099bc828efa1e378e5f45e40a623b37621b68396d2b4b5f0c169c51f8f26"
  }
});