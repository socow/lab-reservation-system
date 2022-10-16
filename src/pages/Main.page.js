import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Calendar, Time } from '../components/_index.components';

export function Main() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [dataValidate, setDataValidate] = useState(false);
  console.log(selectedDate, selectedTime);

  useEffect(() => {
    dataValidation();
  }, [selectedDate, selectedTime]);

  function dataValidation() {
    return selectedDate && selectedTime
      ? setDataValidate(true)
      : setDataValidate(true);
  }

  function registerReservation(e, path) {
    e.preventDefault();
    console.log('hi');
    if (dataValidate) navigate(path);
  }

  return (
    <div>
      <Calendar setSelectedDate={setSelectedDate} />
      <Time setSelectedTime={setSelectedTime} />
      <form>
        <Button
          mode="button"
          type="submit"
          styledmode="secondary"
          onClick={e => {
            registerReservation('/reserve');
          }}
        >
          Next
        </Button>
      </form>
    </div>
  );
}
