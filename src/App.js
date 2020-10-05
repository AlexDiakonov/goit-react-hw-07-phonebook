import React, { Component } from 'react';
import ContactForm from './Components/ContactForm.jsx';
import Filter from './Components/Filter';
import ContactList from './Components/ContactsList.jsx';
import style from './ModuleStyles/PhoneBook.module.css';
import { CSSTransition } from 'react-transition-group';
import './ModuleStyles/animations.css';
import ParticlesBg from 'particles-bg';
import { connect } from 'react-redux';
import contactOperation from './redux/contactOperations';
import contactSelector from './redux/contactsSelectors';
class App extends Component {
   componentDidMount() {
      this.props.onFetchContacts();
   }
   render() {
      const { contacts } = this.props;
      return (
         <div className={style.phonebook}>
            <ParticlesBg type="circle" bg={true}></ParticlesBg>
            <CSSTransition
               appear={true}
               in={true}
               timeout={2000}
               unmountOnExit
               classNames="logo"
            >
               <h2>Phonebook</h2>
            </CSSTransition>
            <ContactForm />
            <h2>Contacts</h2>
            {contacts.length > 1 && <Filter />}

            <ContactList />
         </div>
      );
   }
}
const mSTP = (state) => ({
   contacts: contactSelector.getContacts(state),
});
const mDTP = {
   onFetchContacts: contactOperation.fetchContacts,
};

export default connect(mSTP, mDTP)(App);
