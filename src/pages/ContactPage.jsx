import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import image from '../img/main-bg.jpg';
import { deleteContact, fetchContacts } from 'redux/contactReducer';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
} from 'redux/products.selectors';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/Error/ErrorMessage';
import { Filter } from 'components/Filter/Filter';
import { FormPhone } from 'components/FormPhone/FormPhone';
import { Box, Grid, Text, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="4"
      justifyContent="flex-start"
      flex="3" // Розтягується на всю доступну ширину
      border="2px"
      bgImage={image}
      bgRepeat="no-repeat"
      bgPosition="top center"
      bgSize="cover"
    >
      <Text textAlign="center" fontWeight="800" fontSize="32" mt={4}>
        Phonebook
      </Text>
      <FormPhone />

      <Text textAlign="center" fontWeight="600" fontSize="24">
        Conatcts list
      </Text>

      <Filter />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <Grid templateColumns="repeat(3, 1fr)" gap={2} m="2">
        {Array.isArray(contFilter) &&
          contFilter.map(contact => (
            <Box
              boxShadow="2xl"
              p="4"
              gap="2"
              bg="#a6c9a6"
              rounded="md"
              maxWidth="400px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={contact.id}
            >
              <Text>
                {contact.name}: {contact.number}
              </Text>
              <Button
                onClick={() => handleDelete(contact.id)}
                type="button"
                colorScheme="blackAlpha"
              >
                <DeleteIcon w={5} h={5} />
              </Button>
            </Box>
          ))}
      </Grid>
    </Box>
    /* <ul>
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
      </ul> */
  );
};

export default ContactList;
