import { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/Theme';

export const Input = forwardRef(({ icon, value, onClick }, ref) => {
  const Comp = icon;
  return (
    <StyledInput onClick={onClick} ref={ref}>
      <Wrapper>
        <Comp />
        {value}
      </Wrapper>
    </StyledInput>
  );
});

const StyledInput = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  border: none;
  border-bottom: 1px solid ${colors.gray};
  font-size: large;
  font-weight: bold;

  :hover {
    background-color: ${colors.brand};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin: 0 10px 0 0;
  }
`;
