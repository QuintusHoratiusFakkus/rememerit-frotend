export default function toDoPopup(state = false, action) {
  switch (action.type) {
    case 'TODO_POPUP':
      return action.payload
    default:
      return state
  }
}
