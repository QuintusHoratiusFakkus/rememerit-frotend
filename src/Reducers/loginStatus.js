export default function loginStatus(state = false, action) {
  switch (action.type) {
    case 'LOGIN_STATUS':
      return action.payload
    default:
      return state
  }
}
