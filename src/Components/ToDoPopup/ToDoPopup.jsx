import React, {useState, useEffect } from 'react';

import { useHistory, useLocation } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'

import { mainStyles, Title } from './mainThemes.js';

import ToDoContent from './ToDoContent/ToDoContent.jsx';

import api from './../../Api/api.js';

import {requestSpecification} from './requestSpecification.js';

import {toDoPopup} from './../../Actions/toDoPopup.js';
import {popupDate} from './../../Actions/popupDate.js';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default function ToDoPopup() {
  const classes = mainStyles()

  const dispatch = useDispatch()
  const selector = useSelector(state => state.toDoPopup)
  let selectedDate = useSelector(state => state.popupDate)
  selectedDate = new Date(selectedDate)
  const activeDate = useSelector(state => state.listRequestDate)
  const location = useLocation()
  const history = useHistory()

  const [ value, setValue ] = useState({
    title: '',
    toDo: ''
  })
  const [ image, setImage ] = useState('')
  const [ loadIndication, setLoadIndication ] = useState()
  const id = new URLSearchParams(location.search).get('id')

  const handleDateChange = (date) => {
    dispatch(popupDate(date));
  };

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
    dispatch(toDoPopup(false))
    history.push('/' + location.pathname.split('/')[1])
  }

  useEffect(() => {
    async function toDoDownload(id) {
      if(id){
        try {
          let resp = await api.getToDoData({id})

          setValue({
            title: resp.data.title,
            toDo: resp.data.description
          })
          setImage(resp.data.image)
          let date = new Date(resp.data.date)
          dispatch(popupDate(date))
          setLoadIndication(resp.statusText)
        } catch(error){
          console.log(error)
        }
      }
    }
    toDoDownload(id)
  }, [selector])

  const handleSubmit = e => {
    e.preventDefault()

    requestSpecification(
      api.updateToDo,
      {...value, selectedDate, image, id},
      dispatch,
      location,
      activeDate
    )

    handleCancel()
  }

  const handleClick = (e) => {
    e.preventDefault()

    requestSpecification(
      api.setAsCompleted,
      {id: {id}, selectedDate},
      dispatch,
      location
    )

    handleCancel()
  }

  return(
    <>
      {loadIndication ?
        (
          <Dialog
            className={classes.dialog}
            maxWidth='md'
            fullWidth={true}
            // onClose={props.onClose}
            open={selector}
          >
            <form onSubmit={handleSubmit}>
              <Title
                className={classes.title}
                align='center'
                variant='caption'
                disableTypography
              >
                {value.title}
              </Title>
              <ToDoContent
                value={value}
                handleInputChange={handleInputChange}
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
                imageUpload={imageUpload}
                image={image}
                imageClear={imageClear}
              />
              <DialogActions className={classes.actions}>
                <Button
                  onClick={handleClick}
                  color="primary"
                >
                  Set as compleated
                </Button>
                <div>
                  <Button
                    autoFocus
                    onClick={handleCancel}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button type="label" color="primary">
                    Save changes
                    <input type="submit" hidden/>
                  </Button>
                </div>
              </DialogActions>
            </form>
          </Dialog>
        ) : null
      }
    </>
  )
}
