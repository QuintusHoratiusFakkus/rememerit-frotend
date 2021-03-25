import api from './../Api/api.js'
import {toDosList} from './../Actions/toDosList.js'

export const getToDoListThunk = (date) => {
  return (dispatch) => {
    return api.renderToDosList(date).then(
      list => dispatch(toDosList(list.data))
    )
  }
}
