import React from 'react';
import styled from 'styled-components'
import { Typography } from 'antd'

import theme from '../utils/theme';

function PageHeader({ title }: { title: string }) {
  return (
    <Container>
      <Typography.Title
        level={3}
        style={{ color: theme.copperBlue }}
      >
        {title}
      </Typography.Title>
    </Container>
  );
}

export default PageHeader;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;