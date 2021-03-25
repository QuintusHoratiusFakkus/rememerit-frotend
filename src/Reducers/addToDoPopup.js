export default function addToDoPopup(state = false, action) {
  switch (action.type) {
    case 'ADDTODO_POPUP':
      return action.payload
    default:
      return state
  }
}
