import styled from 'styled-components';

export function Button() {
  return <StyledButton>BUTTON.component</StyledButton>;
}

const StyledButton = styled.button`
  border: 1px dashed white;
  background-color: blue;
`;
