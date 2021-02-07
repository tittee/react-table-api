import dayjs from 'dayjs';
// A great library for fuzzy filtering/sorting items
import * as matchSorter from 'match-sorter';

const today = new Date();
const getTimezoneOffset =
  today.getTimezoneOffset() <= 1
    ? (today.getTimezoneOffset() / 60) * -1
    : today.getTimezoneOffset() / 60;

export const formatDate = (dateString) => {
  return dayjs(dateString).add(getTimezoneOffset, 'hour').format('DD/MM/YYYY');
};

export const formatDateWithMonthName = (dateString) => {
  return dayjs(dateString).add(getTimezoneOffset, 'hour').format('DD MMM YY');
};

export const formatDateTime = (dateString) => {
  return dayjs(dateString)
    .add(getTimezoneOffset, 'hour')
    .format('DD/MM/YYYY, HH:mm');
};


export const fuzzyTextFilterFn = (rows, id, filterValue) => {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
};

// Let the table remove the filter if the string is empty
// #fuzzyTextFilterFn.autoRemove = (val) => !val;

// Define a custom filter filter function!
export const filterGreaterThan = (rows, id, filterValue) => {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
// #filterGreaterThan.autoRemove = val => typeof val !== 'number'