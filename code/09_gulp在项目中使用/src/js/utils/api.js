import axios from 'axios';

export async function getTodos() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
}