import contactAction from './contactActions';
import axios from 'axios';

const addContact = (name, number) => (dispatch) => {
   dispatch(contactAction.addContactRequest());
   axios
      .post('http://localhost:2000/contacts', {
         name,
         number,
      })
      .then(({ data }) => {
         dispatch(contactAction.addContactSuccess(data));
      })
      .catch((error) => {
         dispatch(contactAction.addContactError());
      });
};

const fetchContacts = () => (dispatch) => {
   dispatch(contactAction.fetchContactsRequest());
   axios
      .get('http://localhost:2000/contacts')
      .then(({ data }) => {
         dispatch(contactAction.fetchContactsSuccess(data));
      })
      .catch((error) => {
         dispatch(contactAction.fetchContactsError(error));
      });
};
const removeContact = (id) => (dispatch) => {
   dispatch(contactAction.delContactRequest());
   axios
      .delete(`http://localhost:2000/contacts/${id}`)
      .then(() => dispatch(contactAction.delContactsSuccess(id)))
      .then((error) => contactAction.delContactsError(error));
};
export default { addContact, fetchContacts, removeContact };
