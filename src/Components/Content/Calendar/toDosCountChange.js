import api from './../../../Api/api.js'

export async function toDosCountChange(selector) {
  if (selector) {
    let toDos = {}
    const fromReq = await api.getToDosByDate({
      startCell: selector.date,
      endCell: selector.date
    })

    toDos = {from: fromReq.data}

    if (selector.secondDate) {
      const toReq = await api.getToDosByDate({
        startCell: selector.secondDate,
        endCell: selector.secondDate
      })

      toDos = {
        ...toDos,
        to: toReq.data
      }
    }

    return toDos
  }
}
