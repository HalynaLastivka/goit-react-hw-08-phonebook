import { createSelector } from '@reduxjs/toolkit';

const selectContactStore = state => state.contacts;

export const selectContacts = createSelector(
  selectContactStore,
  contactsStore => contactsStore.contacts
);
export const selectContactsIsLoading = createSelector(
  selectContactStore,
  contactsStore => contactsStore.isLoading
);
export const selectContactsError = createSelector(
  selectContactStore,
  contactsStore => contactsStore.error
);
export const selectContactsFilter = createSelector(
  selectContactStore,
  contactsStore => contactsStore.filter
);
