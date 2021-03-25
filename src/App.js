import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import {useDispatch, useSelector} from 'react-redux'

import {toDoPopup} from './Actions/toDoPopup.js';
import {addToDoPopup} from './Actions/addToDoPopup.js';
import {loginStatus} from './Actions/loginStatus.js';

import s from './App.module.css';
import { globalTheme } from './mainThemes.js';
import { ThemeProvider } from '@material-ui/core/styles';

import Registration from './Components/Registration/Registration.jsx';
import Login from './Components/Login/Login.jsx';
// import Header from './Components/Header/Header.jsx';
import UserActions from './Components/Header/UserActions/UserActions.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Today from './Components/Content/Today/Today.jsx';
import AddToDoForm from './Components/AddToDoForm/AddToDoForm.jsx';
import ToDoPopup from './Components/ToDoPopup/ToDoPopup.jsx';
import Calendar from './Components/Content/Calendar/Calendar.jsx';
import Inbox from './Components/Content/Inbox/Inbox.jsx';

import axios from "axios";

function App() {
  const dispatch = useDispatch()
  const selector = useSelector(state => state.loginStatus)
  const location = useLocation()
  const history = useHistory()

  React.useLayoutEffect(() => {
    if(localStorage.getItem('auth')) {
      axios.defaults.headers.common.auth = localStorage.getItem('auth')
      // dispatch(loginStatus(true))
    }
  }, [])

  React.useEffect(() => {
    if(location.search) {
      const id = new URLSearchParams(location.search).get('id')
      if(id) {
        dispatch(toDoPopup(true))
      }
    }

    if(location.pathname.split('/').includes('newToDo')) {
      dispatch(addToDoPopup(true))
    }
  }, [])

  return (
    <>
      {
        selector ? (
          <div className={s.App}>
            <div className={s.wrapper}>
              <ThemeProvider theme={globalTheme}>
                <div className={s.header}>
                  <UserActions/>
                </div>
                <div className={s.navigation}>
                  <Navigation/>
                </div>
                <div className={s.content}>
                  <Switch>
                    <Route path="/inbox">
                      <Inbox/>
                    </Route>
                    <Route path="/today">
                      <Today/>
                    </Route>
                    <Route path="/calendar">
                      <Calendar/>
                    </Route>
                    <Redirect exact from="/" to="/today" />
                  </Switch>
                  <AddToDoForm/>
                  <ToDoPopup/>
                </div>
              </ThemeProvider>
            </div>
          </div>
        ) : (
          <Switch>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        )
      }
    </>
  );
}

export default App;
