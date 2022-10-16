import styled from 'styled-components';
import { colors, device } from '../styles/Theme';
import { Button } from './_index.components';

export function Nav() {
  return (
    <Container>
      <h1>
        <span>lulu.</span> lululab
      </h1>
      <NavWrapper>
        <Button mode="link" to="/" styledmode="other">
          예약
        </Button>
        <Button mode="link" to="/find">
          조회
        </Button>
      </NavWrapper>
    </Container>
  );
}

const Container = styled.header`
  padding: 0 15px;
  height: 50px;
  background-color: ${colors.brand};
  line-height: 50px;
  display: flex;
  justify-content: space-between;

  > h1 {
    color: ${colors.white};
    font-family: 'Poppins', sans-serif;
    > span {
      color: ${colors.black};
      font-family: 'Pacifico', cursive;
    }
  }

  ${device.desktop} {
    width: 100%;
    position: sticky;
    z-index: 9;
  }
`;

const NavWrapper = styled.nav`
  display: flex;
`;
