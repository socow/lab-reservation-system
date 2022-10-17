import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { colors, device } from '../styles/Theme';
import { DIRECTORY_DATA } from '../data/mockData';
import { Button } from './_index.components';

export function Nav() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container>
      <h1>
        <span>lulu.</span> lululab
      </h1>
      <PageInfo>{DIRECTORY_DATA[pathname]} 페이지</PageInfo>
      <NavWrapper>
        {(pathname === '/reserve' || pathname === '/find-reservation') && (
          <Button mode="link" to="/" styledmode="nav">
            예약
          </Button>
        )}
        {(pathname === '/' || pathname === '/find-reservation') && (
          <Button mode="link" to="/reserve" styledmode="nav">
            등록
          </Button>
        )}
        {(pathname === '/' || pathname === '/reserve') && (
          <Button mode="link" to="/find-reservation" styledmode="nav">
            조회
          </Button>
        )}
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

const PageInfo = styled.h2``;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;
