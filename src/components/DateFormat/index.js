import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import th from 'date-fns/locale/th';
registerLocale('th', th);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CustomDateFormat = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      locale="th"
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default CustomDateFormat;
