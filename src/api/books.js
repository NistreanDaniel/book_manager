import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateBook = async ({ id, ...book }) => {
    const response = await axios.put(`${API_URL}${id}`, book);
    return response.data;
};

export const deleteBook = async (id) => {
    const response = await axios.delete(`${API_URL}${id}`);
    return response.data;
};
export const createBook = async (book) => {
    const response = await axios.post(API_URL, book);
    return response.data;
};

