import styled from 'styled-components';
import { device } from '../styles/Theme';

export function WebNav() {
  return <Container>WebNav.component</Container>;
}

const Container = styled.div`
  display: none;
  ${device.desktop} {
    display: block;
    border: 5px dotted green;
    background-color: peachpuff;
  }
`;
