import React, { MouseEventHandler } from 'react';
import { Button as Btn, Typography } from 'antd'
import styled from 'styled-components'

import theme from '../utils/theme'

type ButtonProps = {
  name: string,
  icon?: any,
  onClick: MouseEventHandler<HTMLElement> | undefined,
  width: number,
  buttonFontSize?: number,
}

function Button({ name, icon, onClick, width, buttonFontSize }: ButtonProps) {
  return (
    <StyledBtn width={width} onClick={onClick} >
      {icon}
      <P size={buttonFontSize}>{name}</P>
    </StyledBtn>
  );
}

export default Button;

const StyledBtn = styled(Btn)<{ width: number }>`
  background: ${theme.copperBlue};
  border-radius: 50px;
  width: ${props => props.width}%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(7, 48, 66, 0.6);
    border: 0;
  }
`;

const P = styled(Typography.Text)<{ size?: number }>`
  font-size: ${props => props.size? `${props.size}px`: `14px`}
  font-weight: medium;
  color: ${theme.neonGreen};
`;