export default function toDoList(state = [], action) {
  switch (action.type) {
    case 'TODOS_LIST':
      return action.payload
    default:
      return state
  }
}
