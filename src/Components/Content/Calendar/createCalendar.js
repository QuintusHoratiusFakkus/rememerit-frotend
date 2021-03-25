import DateContainer from './DateContainer/DateContainer.jsx'
import api from './../../../Api/api.js'

export function createCalendar(dateArr, borders) {
  let datesArray = []
  const {startCell, endCell} = borders

  for (
    let iterableDate = startCell;
    iterableDate <= endCell;
    iterableDate.setDate(iterableDate.getDate() + 1)
  ) {
    let cellToDos = {
      date: new Date(iterableDate),
      toDoList: []
    }
    dateArr.forEach(item => {
      let respDate = new Date(item.date)
      if(respDate.setHours(0,0,0,0) === iterableDate.setHours(0,0,0,0)) {
        cellToDos.toDoList.push({
          title: item.title,
          id: item._id
        })
      }
    })
    datesArray.push(cellToDos)
  }
  
  return datesArray
}

export function bordersMeasure(year, month) {
  const getDay = (date) => {
    let day = date.getDay()
    if (day === 0) day = 7
    return day - 1
  }

  let date = new Date(year, month)
  let startCell = new Date(year, month)
  let endCell = new Date(year, month + 1, 0)

  if(getDay(date) !== 0) {
    startCell.setDate(startCell.getDate() - getDay(date))
  }

  if(getDay(endCell) !== 0) {
    endCell.setDate(endCell.getDate() + (6 - getDay(endCell)))
  }

  return {startCell, endCell}
}
