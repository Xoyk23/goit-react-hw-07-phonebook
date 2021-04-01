import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSucces,
  fetchContactError,
  addContactRequest,
  addContactSucces,
  addContactError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
} from './contacts-actions';

const contactsReducer = createReducer([], {
  [fetchContactSucces]: (_, { payload }) => [...payload],
  [addContactSucces]: (state, { payload }) => [...state, payload],
  [deleteContactSucces]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

export { contactsReducer };
