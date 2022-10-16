import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiCalendar } from 'react-icons/fi';
import { redirect } from 'react-router-dom';
import { check } from 'prettier';

export function RegisterInfo() {
  const [date, setDate] = useState('2022-10-17');
  const [time, setTime] = useState('4:30');
  const [isCheckDuplicate, setIsCheckDuplicate] = useState(false);

  const goToReserve = e => {
    e.preventDefault();
    if (isCheckDuplicate) {
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <div>
        <p>예약내용</p>
        <div>
          {date}
          <br />
          {time}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput>
          <span>*</span>
          <p>예약자</p>
          <input
            type="text"
            required
            {...register('client_name', { required: true })}
          />
          {errors.client_name?.type === 'required' && (
            <div className="required">예약자명을 입력하세요.</div>
          )}
        </StyledInput>
        <StyledInput>
          <span>*</span>
          <p>연락처</p>
          <input
            type="number"
            required
            {...register('client_phonenumber', { required: true })}
          />
          {errors.client_phonenumber?.type === 'required' && (
            <div className="required">연락처를 입력하세요.</div>
          )}
        </StyledInput>
        <StyledInput>
          <span>*</span>
          <p>예약종류</p>
          <div>
            <input
              className="radio_input"
              type="radio"
              name="reservationType"
              value="초진"
              {...register('reservationType', { required: true })}
            />
            초진
            <input
              className="radio_input"
              type="radio"
              name="reservationType"
              value="재진"
              {...register('reservationType', { required: true })}
            />
            재진
            <input
              className="radio_input"
              type="radio"
              name="reservationType"
              value="상담"
              {...register('reservationType', { required: true })}
            />
            상담
            <input
              className="radio_input"
              type="radio"
              name="reservationType"
              value="서류"
              {...register('reservationType', { required: true })}
            />
            서류
          </div>
        </StyledInput>
        <HiddenInput>
          <span>*</span>
          <p>예약날짜</p>
          <input
            type="text"
            required
            value={date}
            name="reservationDate"
            {...register('reservationDate', { required: true })}
          />
        </HiddenInput>
        <HiddenInput>
          <span>*</span>
          <p>예약시간</p>
          <input
            type="text"
            required
            value={time}
            name="reservationTime"
            {...register('reservationTime', { required: true })}
          />
        </HiddenInput>
        <StyledInput>
          <p>요청사항</p>
          <textarea
            name="request"
            placeholder="이곳에 추가 요청사항을 적어주세요. (최대 20자)"
            maxLength={20}
            {...register('request', { maxLength: 20 })}
          />
        </StyledInput>
        <ConfirmButton type="submit">
          <FiCalendar />
          <p>예약 확정</p>
        </ConfirmButton>
      </form>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  form {
    width: 95%;
  }
  span {
    color: red;
    margin-right: 3px;
  }
  .required {
    margin-left: 10px;
    font-size: 13px;
    color: red;
  }
`;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  div {
    display: flex;
    span {
      position: absolute;
      right: 8px;
      font-size: 15px;
      color: red;
    }
  }
  p {
    font-size: 15px;
  }
  input {
    margin-left: 20px;
  }
  .radio_input {
    margin-left: 5px;
  }
  textarea {
    margin-left: 15px;
  }
`;

const HiddenInput = styled.div`
  display: none;
`;

const ConfirmButton = styled.button`
  width: 250px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px 60px;
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
  p {
    margin-left: 5px;
  }
`;
