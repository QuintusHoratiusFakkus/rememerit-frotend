import { getToDoListThunk } from './../../Thunks/getToDoListThunk.js'
import { toDoActionType } from './../../Actions/toDoActionType.js'

export const requestSpecification = async (
  req,
  params,
  dispatch,
  location,
  activeDate
) => {

  const typeSet = (type, selected) => {
    let obj = {
      type: type,
      date: activeDate,
    }
    if (selected) {
      obj = {
        ...obj,
        secondDate: params.selectedDate
      }
    }
    dispatch(toDoActionType(obj))
  }

  const todayRequest = (selectedDate) => {
    if(!(dateParse(new Date(selectedDate)) === dateParse(new Date()))) {
      dispatch(getToDoListThunk({date: new Date()}))
    }
  }

  const calendarRequest = (selectedDate) => {
    if(!(dateParse(new Date(selectedDate)) === dateParse(new Date()))) {
      dispatch(getToDoListThunk({date: activeDate}))
    }
  }

  const dateParse = (date) => {
    let mdy = date.toLocaleDateString().split("/")
    return mdy[0]
  }

  try {
    await req('image' in params ? params : params.id)

    switch (location.pathname) {
      case '/today/todo':
        todayRequest(params.selectedDate)
        break
      case '/calendar/todo':
        if ('image' in params) {
          if (
            activeDate.setHours(0, 0, 0)
            ===
            params.selectedDate.setHours(0, 0, 0)
          ) {
            typeSet('Update')
          } else {
            typeSet('Update', params.selectedDate)
          }
        } else {
          typeSet('Delete')
        }

        calendarRequest(params.selectedDate)
        break
      // case '/inbox':
      default:
      return
    }
  } catch(error) {
    throw error
  }
}
