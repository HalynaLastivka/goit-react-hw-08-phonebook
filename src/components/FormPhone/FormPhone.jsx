import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactReducer';

import { selectContacts } from 'redux/products.selectors';
import { nanoid } from 'nanoid';
import {
  FormControl,
  Button,
  FormLabel,
  Input,
  Stack,
  Box,
} from '@chakra-ui/react';

export const FormPhone = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newOneContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newOneContact));
  };

  const handleSubmit = event => {
    event.preventDefault();

    handleContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <Box
      boxShadow="2xl"
      p="4"
      bg="#d4d4aa"
      rounded="md"
      maxWidth="400px"
      display="flex"
      alignItems="center"
    >
      <form onSubmit={handleSubmit}>
        <FormControl
          as="fieldset"
          isRequired
          maxWidth="300px"
          display="flex"
          flexDirection="column"
          padding="10px"
          gap="5px"
          border="1px solid gray"
        >
          <Stack spacing={4} direction="column">
            <Stack direction="row" spacing={4}>
              <FormLabel m="0" width="20">
                Name:
              </FormLabel>
              <Input
                id="unique-id"
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
                bg="white"
                border="1px"
                borderColor="gray"
                width={60}
              />
            </Stack>
            <Stack direction="row" spacing={4}>
              <FormLabel m="0" width="20">
                Number:
              </FormLabel>
              <Input
                id="unique-id"
                onChange={handleChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                required
                bg="white"
                border="1px"
                borderColor="gray"
                width={60}
              />
            </Stack>
          </Stack>

          <Button colorScheme="blackAlpha" type="submit">
            Add contact
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
