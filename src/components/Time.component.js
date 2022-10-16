import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { BsClock } from 'react-icons/bs';
import { RESERVATIONDATA } from '../data/mockData';
import { Button, Legend, Input } from '../components/_index.components';
import { DatePickerContainer } from '../containers/_index.containers';
import { getRoundedDate } from '../utils/formatTime';

export function Time({ setSelectedTime }) {
  const [startTime, setStartTime] = useState(new Date());
  const [availableTimeList, setAvailableTimeList] = useState([]);

  const TimesArrayData = availableTimeList.filter(({ date, minute, hour }) => {
    return `setHours(setMinutes(${date}, ${minute}), ${hour})`;
  });

  function changeHandler(time) {
    setStartTime();
    setSelectedTime(time);
  }

  return (
    <Container>
      <DatePicker
        selected={startTime}
        calendarContainer={DatePickerContainer}
        customInput={<Input icon={BsClock} />}
        onChange={time => changeHandler(time)}
        minDate={new Date()}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption={false}
        dateFormat="h:mm aa"
        placeholderText="시간을 선택해주세요"
        withPortal
        includeTimes={TimesArrayData}
      />
    </Container>
  );
}

const Container = styled.div`
  margin: 15px 0;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
`;
