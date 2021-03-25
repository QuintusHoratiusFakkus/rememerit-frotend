export default function listRequestDate(state = new Date(), action) {
  switch (action.type) {
    case 'LIST_REQUEST_DATE':
      return action.payload
    default:
      return state
  }
}
