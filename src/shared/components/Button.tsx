import React, { MouseEventHandler } from 'react';
import { Button as Btn } from 'antd' 
import styled from 'styled-components'

import theme from '../utils/theme'

type ButtonProps = {
  name: string,
  onClick: MouseEventHandler<HTMLElement> | undefined,
  width: number,
}

function Button({ name, onClick, width }: ButtonProps) {
  return (
    <StyledBtn width={width} onClick={onClick} >
      {name}
    </StyledBtn>
  );
}

export default Button;

const StyledBtn = styled(Btn)<{ width: number }>`
  background: ${theme.copperBlue};
  color: ${theme.neonGreen};
  border-radius: 50px;
  width: ${props => props.width}%;
`;
