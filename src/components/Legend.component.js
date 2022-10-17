import styled from 'styled-components';
import { colors } from '../styles/Theme';

export function Legend() {
  return (
    <StyledLegend>
      <LegendItem>
        <StyledBox available />
        <span>Available</span>
      </LegendItem>
      <LegendItem>
        <StyledBox />
        <span>Unavailable</span>
      </LegendItem>
    </StyledLegend>
  );
}

const StyledLegend = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  color: ${colors.darkgray};

  > span {
    line-height: 20px;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.available ? colors.brand : colors.gray)};
`;
