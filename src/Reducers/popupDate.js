export default function popupDate(state = new Date(), action) {
  switch (action.type) {
    case 'POPUP_DATE':
      return action.payload
    default:
      return state
  }
}
