import styled from 'styled-components';
import { RegisterInfo } from '../components/RegisterInfo.component';

export function Register() {
  return (
    <Container>
      <h1>예약자 정보</h1>
      <RegisterInfo />
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
`;
