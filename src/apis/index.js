import axios from 'axios';
const lists = axios.create({
  baseURL: 'http://localhost:7000',
});

export const getLists = async () => {
  return await lists.get(`/data`).catch((err) => console.log(err));
};
