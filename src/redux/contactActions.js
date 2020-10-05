import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contact/addRequest');
const addContactSuccess = createAction('contact/addSuccess');
const addContactError = createAction('contact/addError');

const fetchContactsRequest = createAction('contact/fetchRequest');
const fetchContactsSuccess = createAction('contact/fetchSuccess');
const fetchContactsError = createAction('contact/fetchError');

const delContactRequest = createAction('contact/delContRequest');
const delContactsSuccess = createAction('contact/delContSuccess');
const delContactsError = createAction('contact/delContError');

const doFilter = createAction('contact/filter', (filter) => ({
   payload: { filter },
}));

export default {
   addContactRequest,
   addContactSuccess,
   addContactError,

   fetchContactsRequest,
   fetchContactsSuccess,
   fetchContactsError,

   delContactRequest,
   delContactsSuccess,
   delContactsError,

   doFilter,
};
