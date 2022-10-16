import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { colors, device } from '../styles/Theme';
import { Legend } from '../components/_index.components';

export function DatePickerContainer({ className, children }) {
  return (
    <Container className={className}>
      <HeaderWrapper />
      <MonthWrapper>{children}</MonthWrapper>
      <Legend />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-width: 350px;
  height: 500px;
  padding: 20px;

  ${device.desktop} {
    width: 420px;
  }

  .react-datepicker {
    visibility: visible !important;
    display: block !important;
    font-family: RobotoMedium;
    font-size: 14px !important;
    color: #c7c7c7 !important;

    &__header {
      background-color: #fff;
      border: none;
    }

    &__day-name {
      font-size: 14px !important;
      text-transform: uppercase;
    }

    &__day {
      color: $black !important;
      font-size: 13px !important;
      &:hover {
        background-color: ${colors.brand};
        opacity: 0.8;
        color: ${colors.white};
      }
      &--keyboard-selected,
      &--selected {
        border-radius: 0px !important;
        background: ${colors.brand} !important;
        color: $white !important;
      }
      &--disabled {
        color: ${colors.gray} !important;
      }
      &--today {
        position: relative;
      }
      &--today:hover::after {
        display: 'block';
        content: 'TODAY';
        font-size: 5px;
        position: absolute;
        transform: translate(-85%, 30%);
      }
    }
  }
  .react-datepicker__portal {
    position: relative;
    height: fit-content;
    > div {
      width: 420px !important;
    }
  }
  .react-datepicker {
    &--time-only {
      color: blue;
      &__time-container {
        background-color: blue;
        width: 350px;
      }
      &__header--time {
        display: none;
      }
      &__time-list {
        display: grid;
        min-width: 350px;
        width: 420px;
        &-item {
          padding: 15px;
          color: red !important;

          &--disabled {
            background-color: blue;
          }
        }
      }
    }
  }
`;

const HeaderWrapper = styled.div`
  background-color: yellow;
`;

const MonthWrapper = styled.div`
  position: relative;
  background-color: pink;
`;
