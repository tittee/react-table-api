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
      id: formValues.lastId, 
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .catch((err) => console.log(err));
};

// EDIT
export const editStream = (id, formValues) => async dispatch => {
  return await lists.patch(`/data/${id}`, formValues);
};

// DELETE
export const deleteStream = (id) => async dispatch => {
  return await lists.delete(`/data/${id}`);
};