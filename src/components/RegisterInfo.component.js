import styled from 'styled-components';
import { FiCalendar } from 'react-icons/fi';

export function RegisterInfo() {
  const checkOnlyOne = checkThis => {
    const checkboxes = document.getElementsByName('test');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <>
      <p>예약자 정보</p>
      <Container>
        <Name>
          <p>예약자명</p>
          <div className="required">
            <input type="text" />
            <span>*필수</span>
          </div>
        </Name>
        <Phone>
          <p>연락처</p>
          <div className="required">
            <input type="number" />
            <span>*필수</span>
          </div>
        </Phone>
        <Type>
          <p>예약종류</p>
          <div className="input">
            <input
              type="checkbox"
              name="test"
              value="1"
              onChange={e => checkOnlyOne(e.target)}
            />
            초진
            <input
              type="checkbox"
              name="test"
              value="2"
              onChange={e => checkOnlyOne(e.target)}
            />
            재진
            <input
              type="checkbox"
              name="test"
              value="3"
              onChange={e => checkOnlyOne(e.target)}
            />
            상담
            <input
              type="checkbox"
              name="test"
              value="4"
              onChange={e => checkOnlyOne(e.target)}
            />
            서류
          </div>
        </Type>
        <Request>
          <p>요청사항</p>
          <textarea placeholder="이곳에 추가 요청사항을 적어주세요. " />
        </Request>
        <ConfirmButton type="submit">
          <FiCalendar />
          <p>예약 확정</p>
        </ConfirmButton>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px dashed white;
  background-color: green;
  p {
  }
`;

const Name = styled.div`
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
  .required {
    position: relative;
  }
  p {
    font-size: 15px;
  }
  input {
    margin-left: 20px;
  }
`;

const Phone = styled.div`
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
  .required {
    position: relative;
  }
  p {
    font-size: 15px;
  }
  input {
    margin-left: 32px;
  }
`;

const Type = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  p {
    font-size: 15px;
  }
  .input {
    margin-left: 17px;
    font-size: 15px;
  }
`;

const Request = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 15px;
  textarea {
    margin-left: 15px;
  }
`;

const ConfirmButton = styled.button`
  width: 80%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
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
