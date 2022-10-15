import styled from 'styled-components';
import { Calendar } from '../components/_index.components';
import { List } from '../containers/_index.containers';

export function Main() {
  return (
    <Container>
      <h1>Main.page</h1>
      <Calendar />
      <List />
    </Container>
  );
}

const Container = styled.div`
  border: 3px solid blue;
`;
