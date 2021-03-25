export default function toDoActionType(state = null, action) {
  switch (action.type) {
    case 'TODO_ACTION_TYPE':
      return action.payload
    default:
      return state
  }
}
