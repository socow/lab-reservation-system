import styled from 'styled-components';
import { RegisterInfo } from '../components/RegisterInfo.component';

export function Register() {
  return (
    <Container>
      <h1>Register.page</h1>
      <RegisterInfo />
    </Container>
  );
}

const Container = styled.div`
  border: 3px solid blue;
`;
