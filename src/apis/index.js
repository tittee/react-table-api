import axios from 'axios';

const lists = axios.create({
  baseURL: 'http://localhost:7000',
});

export const getLists = async () => {
  return await lists.get(`/data`).catch((err) => console.log(err));
};

// CREATE
export const createList = async (formValues) => {  
  return await lists
    .post(`/data`, {
      title: formValues.title,
      description: formValues.description,
      id: Math.random(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .catch((err) => console.log(err));
};

// EDIT
export const editList = async (id, formValues) => {
  return await lists
    .patch(`/data/${id}`, formValues)
    .catch((err) => console.log(err));
};

// DELETE
export const deleteList = async (id) => {
  return await lists.delete(`/data/${id}`).catch((err) => console.log(err));
};