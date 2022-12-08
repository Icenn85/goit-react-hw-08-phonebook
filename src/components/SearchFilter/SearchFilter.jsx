import React from 'react';
import css from './SearchFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContactsAction } from '../../redux/filterSlice';
import { selectFilterValue } from '../../redux/selectors';
import Input from '@mui/material/Input';

const SearchFilter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onHandleChangeFilter = evt => {
    dispatch(filterContactsAction(evt.currentTarget.value));
  };

  return (
    <div className={css.container}>
      <h3 className={css.filter__title}>Find contacts by name</h3>
      <Input
        variant="contained"
        placeholder="Search"
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChangeFilter}
        className={css.filter__input}
      />
    </div>
  );
};

export default SearchFilter;