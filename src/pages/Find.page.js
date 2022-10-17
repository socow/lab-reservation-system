import { useState } from 'react';
import { RESERVATIONDATA } from '../data/mockData';
import styled from 'styled-components';
import { colors } from '../styles/Theme';

export function Find() {
  const [userInput, setUserInput] = useState({ text: '', number: '' });
  const [userData, setUserData] = useState('');

  const ReservationRequest = e => {
    e.preventDefault();
    setUserData(userInput);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
    e.preventDefault();
  };

  const filterReservationData = RESERVATIONDATA.filter(
    data =>
      data.clientNumber === userData.number && data.clientName === userData.text
  );

  return (
    <FindWrappar>
      <SearchBox onSubmit={ReservationRequest}>
        <Search
          name="text"
          value={setUserInput.text}
          type="text"
          placeholder="예약자명을 입력해주세요"
          onChange={handleChange}
        />
        <Search
          name="number"
          value={setUserInput.number}
          type="Search"
          placeholder="예약번호를 입력해주세요"
          onChange={handleChange}
        />
        <ReservationCheck
          disabled={!(userInput.text && userInput.number)}
          type="submit"
        >
          예약조회
        </ReservationCheck>
        {userData && filterReservationData.length === 0 && (
          <NoReservation>예약내역이 없습니다</NoReservation>
        )}
        {filterReservationData &&
          filterReservationData.map(
            ({ id, clientName, type, date, startTime, reservationStatus }) => (
              <UserInformationWrappar key={id}>
                <UserInformation>예약번호: {id}</UserInformation>
                <UserInformation>예약자명: {clientName}</UserInformation>
                <UserInformation>예약종류: {type}</UserInformation>
                <UserInformation>예약날짜 : {date}</UserInformation>
                <UserInformation>예약시간 : {startTime}</UserInformation>
                <UserInformation>예약상태: {reservationStatus}</UserInformation>
                <UserInformation>요청사항: </UserInformation>
              </UserInformationWrappar>
            )
          )}
      </SearchBox>
    </FindWrappar>
  );
}

const FindWrappar = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchBox = styled.form`
  width: 100%;
  height: 40px;
`;

const Search = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
`;

const ReservationCheck = styled.button`
  width: 100%;
  font-size: 23px;
  color: ${colors.white};
  background-color: ${colors.brand};
  border: 1.5px solid ${colors.brand};

  &:disabled {
    opacity: 0.5;
  }
`;

const NoReservation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 20px;
`;

const UserInformationWrappar = styled.div`
  font-size: 17px;
  margin-top: 10px;
`;
const UserInformation = styled.div`
  padding: 7px;
  border-bottom: 1.5px solid ${colors.brand};
`;
