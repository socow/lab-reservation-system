import styled from 'styled-components';
import { Button } from '../components/_index.components';

export function List() {
  return (
    <Container>
      RESERVATIONLIST.container
      <Button />
      <Button />
      <Button />
    </Container>
  );
}

const Container = styled.div`
  background-color: purple;
`;
