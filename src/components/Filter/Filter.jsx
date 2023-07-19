import { FormGenerator } from 'components/FormGenerator';
import { useDispatch } from 'react-redux';
import { write } from 'redux/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();

    dispatch(write(filterValue));
  };

  return <FormGenerator type={'filter'} onFilterChange={onFilterChange} />;
};
