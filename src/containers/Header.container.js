import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, WebNav } from '../components/_index.components';
import { colors, device } from '../styles/Theme';

export const Header = () => {
  return (
    <Container>
      <Inner>
        <WebNav />
        <ContentsWrapper>
          <Nav />
          <Contents>
            <Outlet />
          </Contents>
        </ContentsWrapper>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${colors.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  width: 100%;

  ${device.tablet} {
    min-width: 420px;
    display: flex;
    justify-content: center;
  }

  ${device.desktop} {
    width: 80%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentsWrapper = styled.div`
  background-color: ${colors.lightgray};
  min-width: 375px;

  ${device.tablet} {
    width: 420px;
    height: 100vh;
  }
  ${device.desktop} {
    width: 420px;
    height: 100vh;
  }
`;

const Contents = styled.div`
  border: 3px solid green;
`;
