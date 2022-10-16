# lab-reservation-system

# 미리보기

# 1. 프로젝트 개요

- 진행기간: 10/14 금 ~ 10/17 월
- 과제주관: (주)하이
- 참여인원: 김슬기, 소재현, 최은비 (프론트엔드 3명)
- 사용기술: Javascript / React / Styled-Component

# 2. 요구사항과 해결방법

> 병원 예약 가능 목록 페이지<br>

---

> 예약 등록 페이지<br>

---

> 예약 내역 조회 페이지 <br>

예약 번호 또는 예약자로 예약 목록 조회가 가능해야 합니다.

```javascript
const [userInput, setUserInput] = useState({ text: '', number: '' });
const [userData, setUserData] = useState('');
//이름과 전화번호를 저장하여 조회요청을 합니다
const ReservationRequest = e => {
  e.preventDefault();
  setUserData(userInput);
};
// input에 입력되는 데이터를 state에 저장합니다
const handleChange = e => {
  const { name, value } = e.target;
  setUserInput({ ...userInput, [name]: value });
  e.preventDefault();
};

//state로 받은 input에 입력된 이름과 전화번호를 데이터와 일치하는것만 필터링해서 저장후 map함수를 사용하여 일치하는 데이터만 보여준다
const filterReservationData = RESERVATIONDATA.filter(
  data =>
    data.clientNumber === userData.number && data.clientName === userData.text
);
```
