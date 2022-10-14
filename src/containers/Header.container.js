import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, WebNav } from '../components/_index.components';

export const Header = () => {
  return (
    <Container>
      <WebNav />
      <ContentsWrapper>
        <Nav />
        <Contents>
          <Outlet />
        </Contents>
      </ContentsWrapper>
    </Container>
  );
};

const Container = styled.div``;
const ContentsWrapper = styled.div`
  background-color: orange;
  border: 1px solid orange;
`;

const Contents = styled.div`
  background-color: lightpink;
  border: 1px solid red;
`;
