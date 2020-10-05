import { combineReducers } from 'redux';
import { toast } from 'react-toastify';
import { createReducer } from '@reduxjs/toolkit';
import contactAction from './contactActions';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const notifiation = () => {
   toast.info(`First, you have to enter the name!`, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
   });
};

const addContact = (state, action) => {
   if (action.payload.name.length >= 1) {
      return [...state, action.payload];
   } else {
      notifiation();
   }
};
const removeContact = (state, action) =>
   state.filter((items) => items.id !== action.payload);

const items = createReducer([], {
   [contactAction.fetchContactsSuccess]: (state, { payload }) =>
      payload,
   [contactAction.addContactSuccess]: addContact,
   [contactAction.delContactsSuccess]: removeContact,
});

const setFilter = (state, action) => action.payload.filter;

const filter = createReducer('', {
   [contactAction.doFilter]: setFilter,
});

export default combineReducers({
   items,
   filter,
});
