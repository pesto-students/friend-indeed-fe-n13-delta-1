import React from 'react';
import styled from 'styled-components'

import theme from '../utils/theme'

function Footer() {
  // TBD in final changes
  return (
    <Container>
      Footer
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  background-color: ${theme.primary};
  height: 100px;
  width: 100%;
`;
