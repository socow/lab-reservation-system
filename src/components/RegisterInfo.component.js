import styled from 'styled-components';

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
      <p>Personal Information</p>
      <Container>
        <Name>
          <p>예약자명</p>
          <input type="box" />
        </Name>
        <Name />
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
          <textarea placeholder="이곳에 추가 요청사항을 작성해주세요. " />
        </Request>
        <ConfirmButton />
        <button type="submit">예약 확정</button>
      </Container>
    </>
  );
}

const Container = styled.button`
  border: 1px dashed white;
  background-color: green;
  width: 100%;
  p {
  }
`;

const Name = styled.div`
  display: flex;
  margin-top: 10px;
  /* text-align: center; */
  p {
    font-size: 15px;
  }
  input {
    margin-left: 20px;
  }
`;

const Type = styled.div`
  display: flex;
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
  margin-top: 10px;
  font-size: 15px;
  textarea {
    margin-left: 20px;
  }
`;

const ConfirmButton = styled.div``;
