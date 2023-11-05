import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactReducer';
import { selectContactsFilter } from 'redux/products.selectors';

export const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const filterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by name:
      <input onChange={filterChange} value={filter} type="text" name="filter" />
    </label>
  );
};
