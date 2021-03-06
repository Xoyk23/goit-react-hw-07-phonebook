import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

import { fetchContacts } from '../redux/contactsItems/contacts-operations';
// import { getContactsLengths } from '../redux/contactsItems/contacts-selectors';

import styles from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   contactsLength: getContactsLengths(state),
// });

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
