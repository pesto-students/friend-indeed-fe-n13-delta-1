import React, { MouseEventHandler } from 'react';
import { Button as Btn, Typography } from 'antd'
import styled from 'styled-components'

import theme from '../utils/theme'

type ButtonProps = {
  name: string,
  icon?: any,
  onClick?: MouseEventHandler<HTMLElement> | undefined,
  width: number,
  height?: number,
  buttonFontSize?: number,
  description?: string,
  extraProps?: any,
}

function Button({ 
  name, 
  icon, 
  onClick,
  width,
  height,
  buttonFontSize,
  description,
  extraProps
}: ButtonProps) {
  return (
    <StyledBtn type='primary' {...{ width, height, onClick, ...extraProps }} >
      <>
        {!!icon && icon}
        <P icon={!!icon} size={buttonFontSize}>{name}</P>
      </>
      {!!description && <SubP>{description}</SubP>}
    </StyledBtn>
  );
}

export default Button;

const StyledBtn = styled(Btn)<{ width: number, height?: number }>`
  // background: ${theme.copperBlue};
  border: 0;
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

  &:active {
    background-color: rgba(7, 48, 66, 0.6);
    border: 0;
  }
`;

const P = styled(Typography.Text)<{ size?: number, icon?: boolean }>`
  font-family: DM Sans;
  font-size: ${props => props.size? `${props.size}px`: `14px`};
  font-weight: medium;
  color: ${theme.neonGreen};
  margin-left: ${props => props.icon? 10: 0}px;
`;

const SubP = styled(Typography.Text)`
  font-family: DM Sans;
  font-size: 11px;
  color: ${theme.neonGreen};
  opacity: 0.8;
`;