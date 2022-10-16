import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { BsCalendar } from 'react-icons/bs';
import { DatePickerContainer } from '../containers/_index.containers';
import { Input } from './_index.components';
import { formatDate } from '../utils/formatDate';

export function Calendar({ setSelectedDate }) {
  const [startDate, setStartDate] = useState(new Date());

  function changeHandler(date) {
    setStartDate(date);
    setSelectedDate(formatDate(date));
  }

  return (
    <DatePicker
      selected={startDate}
      calendarContainer={DatePickerContainer}
      customInput={<Input icon={BsCalendar} />}
      onChange={date => changeHandler(date)}
      minDate={new Date()}
      fixedHeight
      withPortal
      locale={ko}
    />
  );
}
