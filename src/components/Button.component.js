import { Link } from 'react-router-dom';
import { string, bool, array, oneOf, oneOfType, object } from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../styles/Theme';

export function Button({
  mode,
  to,
  disabled,
  fullwidth,
  children,
  ...restProps
}) {
  const Component = modeComponent[mode];
  const selectedProp = mode === 'button' ? { disabled: disabled } : { to: to };
  return (
    <Component {...restProps} {...selectedProp}>
      {children}
    </Component>
  );
}

const disabledStyle = {
  primary: {
    'background-color': colors.lightGray,
    border: `1px dashed ${colors.gray}`,
    cursor: 'not-allowed',
    opacity: '0.5',
  },
};

const hoverEffect = {
  primary: {
    'background-color': colors.brand,
  },
  secondary: {
    opacity: '0.8',
  },
  other: {
    'background-color': colors.brand,
    border: `3px solid ${colors.brand}`,
  },
};

const modeStyle = {
  primary: {
    'background-color': colors.white,
    border: `1px solid ${colors.brand}`,
  },
  secondary: {
    width: '100%',
    height: '40px',
    'background-color': colors.brand,
    border: `3px solid ${colors.brand}`,
    'border-radius': '10px',
    color: colors.white,
  },
  other: {
    width: '200px',
    height: '50px',
    'background-color': colors.gray,
    border: `3px solid ${colors.white}`,
    'border-radius': '50px',
    color: colors.white,
  },
};

const componentDesign = css`
  padding: 10px;
  display: flex;
  box-sizing: border-box;
  font-family: inherit;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: ${fullwidth => (fullwidth ? '100%' : '50px')};
  ${({ styledmode }) => modeStyle[styledmode]};

  &:disabled {
    ${({ disabled, styledmode }) =>
      disabled && { ...disabledStyle[styledmode] }};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    ${({ disabled, styledmode }) => !disabled && hoverEffect[styledmode]};
  }
`;

const StyledButton = styled.button`
  ${componentDesign}
`;

const StyledLink = styled(Link)`
  ${componentDesign}
`;

const modeComponent = {
  button: StyledButton,
  link: StyledLink,
};

Button.propTypes = {
  mode: oneOf(['button', 'link']).isRequired,
  styledmode: string,
  type: string,
  disabled: bool,
  to: string,
  fullwidth: bool,
  children: oneOfType([array, string, object]),
};

Button.defaultProps = {
  mode: 'button',
  styledmode: 'primary',
  type: 'button',
  disabled: false,
  to: '#',
  fullwidth: false,
  children: 'Button',
};
