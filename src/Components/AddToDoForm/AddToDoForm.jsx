import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import { getToDoListThunk } from './../../Thunks/getToDoListThunk.js'

import { useLocation, useHistory } from "react-router-dom";

import {addToDoPopup} from './../../Actions/addToDoPopup.js';
import {popupDate} from './../../Actions/popupDate.js';
import {listRequestDate} from './../../Actions/listRequestDate.js';
import {toDoActionType} from './../../Actions/toDoActionType.js';

import windowSizeChange from './widnowSizeChange.js';
import {validate} from './emailValidate.js';

import api from './../../Api/api.js';

import AddToDoContent from './AddToDoContent/AddToDoContent.jsx';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

function AddToDoForm(props) {
  const dispatch = useDispatch()
  let location = useLocation()
  const openState = useSelector(state => state.addToDoPopup)
  let selectedDate = useSelector(state => state.popupDate)
  selectedDate = new Date(selectedDate)
  let dateOfCell = useSelector(state => state.listRequestDate)
  const history = useHistory()

  const [ value, setValue ] = React.useState({
    title: '',
    toDo: '',
    email: ''
  });
  const [ image, setImage ] = React.useState('');

  const clearState = () => {
    setValue({
      title: '',
      toDo: '',
      email: ''
    })
    dispatch(popupDate(dateOfCell))
    setImage('')
  }

  const handleDateChange = (date) => {
    dispatch(popupDate(date))
  }

  const handleInputChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
  }

  const imageUpload = (event) => {
    const file = event.target.files[0]
    if(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        setImage(e.target.result)
      }
    }
    event.target.value = ''
  }

  const imageClear = () => {
    setImage('')
  }

  const handleCancel = () => {
    dispatch(addToDoPopup(false))
    clearState()

    history.push('/' + location.pathname.split('/')[1])
  };

  // const escClose = event => {
  //   if (event.key === 'Escape') {
  //     dispatch(addToDoPopup(false))
  //   }
  // };

  const dateParse = (date) => {
    let mdy = new Date(date).toLocaleDateString().split("/")

    return mdy[0]
  }

  const todayRequest = () => {
    if(dateParse(selectedDate) === dateParse(new Date())) {
      dispatch(getToDoListThunk({date: new Date()}))
    }
  }

  const calendarRequest = () => {
    dispatch(getToDoListThunk({date: selectedDate}))
  }

  const typeSet = (activeDate) => {
    let obj = {
      type: 'Add',
      date: selectedDate,
    }
    if (activeDate) {
      obj = {
        ...obj,
        secondDate: activeDate
      }
    }
    dispatch(toDoActionType(obj))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if(validate(value.email)) {
        await api.toAnotherUser({...value, selectedDate, image})
      } else {
        await api.createToDo({
          title: value.title,
          toDo: value.toDo,
          selectedDate,
          image
        })
      }
      switch (location.pathname) {
        case '/today/newToDo':
          todayRequest()
          break
        case '/calendar/newToDo':
          if (selectedDate.setHours(0, 0, 0) === dateOfCell.setHours(0, 0, 0)) {
            typeSet()
            calendarRequest()
          } else {
            typeSet(dateOfCell)
          }
          break
        case '/inbox':

      }

    } catch(error) {
      throw error
    }
    clearState()
  }

  return(
    <Dialog
      maxWidth={'md'}
      fullWidth={true}
      open={openState}
    >
      <DialogTitle
        align='center'
        variant='caption'
      >
        Add new ToDo
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <AddToDoContent
          value={value}
          handleInputChange={handleInputChange}
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          imageUpload={imageUpload}
          image={image}
          imageClear={imageClear}
        />
        <DialogActions>
          <Button
            autoFocus
            onClick={() => handleCancel()}
          >
            Cancel window
          </Button>
          <Button type="label" color="primary">
            Add ToDo
            <input type="submit" hidden/>
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddToDoForm;
