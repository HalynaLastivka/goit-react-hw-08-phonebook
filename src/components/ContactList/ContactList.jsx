import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contactReducer';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
} from 'redux/products.selectors';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/Error/ErrorMessage';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const error = useSelector(selectContactsError);
  const isLoading = useSelector(selectContactsIsLoading);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contFilter = getFilteredContacts();
  // const contFilter = contacts;

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ul>
        {contFilter.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
            <button
              onClick={() => handleDelete(contact.id)}
              type="button"
              className={css.btndelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
