### ✅ lab-reservation-system

# 미리보기

# 1. 프로젝트 개요

- 진행기간: 10/14 금 ~ 10/17 월
- 과제주관: 룰루랩
- 참여인원: 김슬기, 소재현, 최은비 (프론트엔드 3명)
  <br/>
  <br/>

# 2. 기술 스택

- JavaScript
- React.js
- styled-components
  <br/>
  <br/>

  # 3. 프로젝트 설치 및 실행 방법

  1. Node.JS를 다운받아 설치해주세요.

```
https://nodejs.org/
```

<br/>

2. 리포지토리를 클론해주세요.<br/>

```
git clone https://github.com/ebchoi/lab-reservation-system.git
```

<br/>

3.dependencies를 설치해주세요.

```
npm install
```

<br/>
<br/>

## 실행방법

1. 다음 명령어를 이용해 실행시켜주세요.

```
npm run start
```

<br/>

2. 브라우저에서 http://localhost:3000/로 접속하거나, [배포주소]로 접속해주시면 됩니다.

   <br/>
   <br/>

# 4. 역할 분담 및 구현 기능

> 병원 예약 가능 목록 페이지<br>

- react-date-picker 사용하여 해당 월에 예약 가능한 목록 나타내기
- 오늘 날짜를 기준으로 가능한 시간을 보여줍니다.
- 가능한 목록에서 날짜를 선택할 경우 예약 가능한 시간을 보여줍니다.
- 예약 시간은 30분 단위로 선택 가능한 버튼으로 구현합니다.

---

> 예약 등록 페이지<br>

- react-hook-form을 사용하여 예약자 정보 폼 내의 예약자 이름, 연락처, 예약종류, 요청사항을 입력하여 예약을 가능하게 합니다.
- 유효성 검사를 통해 필수값 입력되어야만 submit 가능하게 구현합니다.
- mock data에서 연락처를 확인해 중복된 연락처일 경우 예약이 불가능합니다.

---

> 예약 내역 조회 페이지 <br>

- 예약 번호 또는 예약자로 예약 목록 조회가 가능해야 합니다.

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

<br/>
<br/>

# 팀원소개

### ✅ 프론트엔드 최은비

- 깃허브
- 블로그

### ✅ 프론트엔드 김슬기

- 깃허브 https://github.com/sseul22
- 블로그 https://velog.io/@sseul22

### ✅ 프론트엔드 소재현

- 깃허브
- 블로그
