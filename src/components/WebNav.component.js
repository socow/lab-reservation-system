import styled from 'styled-components';
import { colors, device } from '../styles/Theme';
import { Button } from './_index.components';

export function WebNav() {
  return (
    <Container>
      <h2>
        <span>룰루랩</span> 간편한 병원 예약 시스템
      </h2>
      <ButtonWrapper>
        <Button mode="link" to="/" styledmode="other">
          Google Play 다운
        </Button>
        <Button mode="link" to="/" styledmode="other">
          App Store 다운
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  ${device.desktop} {
    padding: 0 0 0 50px;
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    color: ${colors.white};

    h2 {
      font-size: 35px;

      > span {
        color: ${colors.brand};
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
