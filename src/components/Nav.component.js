import styled from 'styled-components';
import { colors } from '../styles/Theme';

export function Nav() {
  return (
    <Container>
      <h1>
        <span>lulu.</span> lululab
      </h1>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 15px;
  height: 50px;
  background-color: ${colors.pink};
  line-height: 50px;

  > h1 {
    color: ${colors.white};
    font-family: 'Poppins', sans-serif;
    > span {
      color: ${colors.black};
      font-family: 'Pacifico', cursive;
    }
  }
`;
