import axios from 'axios'

const api = {
  registration: data => axios.post('/registration', data),
  login: data => axios.get('/login', {params: {...data}}),
  createToDo: data => axios.post('/createToDo', data),
  renderToDosList: data => axios.get('/toDosList', {params: {...data}}),
  getToDoData: data => axios.get('/toDoData', {params: {...data}}),
  setAsCompleted: data => axios.delete('/toDoDelete', {params: {...data}}),
  updateToDo: data => axios.put('/toDoEdit', data),
  deleteUser: data => axios.delete('/deleteUser', {params: {...data}}),
  getToDosByDate: data => axios.get('/toDoByDate', {params: {...data}}),
  toAnotherUser: data => axios.post('/exchange', data),
}

export default api
