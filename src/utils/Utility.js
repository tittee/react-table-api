import dayjs from 'dayjs';
import Swal from 'sweetalert2';

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

export const showError = ( msg ) => {
  Swal.fire({
    title: msg.title ? msg.title : 'Are you sure?',
    text: msg.message ? msg.message : "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  });
} 

export const getLastId = (lastId) => {
  return lastId + 1;
};