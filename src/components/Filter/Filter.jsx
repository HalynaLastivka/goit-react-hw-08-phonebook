import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactReducer';
import { selectContactsFilter } from 'redux/products.selectors';
import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const filterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <FormControl mb="10">
        <FormLabel textAlign="center">Find contacts by name:</FormLabel>
        <Input
          onChange={filterChange}
          value={filter}
          type="text"
          name="filter"
          bg="white"
          border="1px"
          borderColor="gray"
          width={60}
        />
      </FormControl>
    </Box>
  );
};
