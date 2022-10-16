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
              <UserInformation key={id}>
                <UserNumber>예약번호: {id}</UserNumber>
                <UserName>예약자명: {clientName}</UserName>
                <UserType>예약종류: {type}</UserType>
                <UserDate>예약날짜 : {date}</UserDate>
                <UserStartTime>예약시간 : {startTime}</UserStartTime>
                <UserReservationStatus>
                  예약상태: {reservationStatus}
                </UserReservationStatus>
              </UserInformation>
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
  background-color: ${colors.pink};
  border: 1.5px solid ${colors.pink};

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

const UserInformation = styled.div`
  font-size: 17px;
  margin-top: 10px;
`;
const UserNumber = styled.div`
  padding: 7px;
  border-bottom: 1.5px solid ${colors.pink};
`;
const UserName = styled.div`
  padding: 7px;
  border-bottom: 1.5px solid ${colors.pink};
`;
const UserType = styled.div`
  padding: 7px;
  border-bottom: 1.5px solid ${colors.pink};
`;
const UserDate = styled.div`
  padding: 7px;
  border-bottom: 1.5px solid ${colors.pink};
`;
const UserStartTime = styled.div`
  padding: 7px;
  border-bottom: 1.5px solid ${colors.pink};
`;
const UserReservationStatus = styled.div`
  padding: 7px;
  border-bottom: 1.5px solid ${colors.pink};
`;
