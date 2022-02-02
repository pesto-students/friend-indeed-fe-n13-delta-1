import React, { MouseEventHandler } from 'react';
import { Button as Btn, Typography } from 'antd'
import styled from 'styled-components'

import theme from '../utils/theme'

type ButtonProps = {
  name: string,
  icon?: any,
  onClick: MouseEventHandler<HTMLElement> | undefined,
  width: number,
  height?: number,
  buttonFontSize?: number,
  description?: string,
}

function Button({ 
  name, 
  icon, 
  onClick,
  width,
  height,
  buttonFontSize,
  description
}: ButtonProps) {
  return (
    <StyledBtn {...{ width, height, onClick }} >
      <p>
        {icon}
        <P icon={!!icon} size={buttonFontSize}>{name}</P>
      </p>
      {!!description && <SubP>{description}</SubP>}
    </StyledBtn>
  );
}

export default Button;

const StyledBtn = styled(Btn)<{ width: number, height?: number }>`
  background: ${theme.copperBlue};
  border-radius: 50px;
  height: ${props => props.height? props.height: 40}px;
  width: ${props => props.width}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  &:hover {
    background-color: rgba(7, 48, 66, 0.6);
    border: 0;
  }
`;

const P = styled(Typography.Text)<{ size?: number, icon?: boolean }>`
  font-family: DM Sans;
  font-size: ${props => props.size? `${props.size}px`: `14px`}
  font-weight: bold;
  color: ${theme.neonGreen};
  margin-left: ${props => props.icon? 10: 0}px;
`;

const SubP = styled(Typography.Text)`
  font-family: DM Sans;
  font-size: 9px;
  color: ${theme.neonGreen};
  opacity: 0.8;
`;