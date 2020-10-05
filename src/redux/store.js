import contactsReducer from '../redux/contactsReducer';
import {
   configureStore,
   getDefaultMiddleware,
} from '@reduxjs/toolkit';

const middlewareSettings = getDefaultMiddleware();
const store = configureStore({
   reducer: { contacts: contactsReducer },
   middleware: [...middlewareSettings],
});

export default store;
