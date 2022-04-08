import React from 'react';
import styled from 'styled-components'
import { Row, Col, Typography, Input, Button, Form, Space, Avatar } from 'antd'
import { FacebookFilled, TwitterCircleFilled, InstagramFilled } from '@ant-design/icons'

import theme from '../utils/theme'

function Footer() {
  
  return (
    <Container>
      <StyledRow>
        <QuickLinks>
          <Row gutter={[16, 24]}>
            <Col span={12}>Home</Col>
            <Col span={12}>About Us</Col>
            <Col span={12}>For Patients</Col>
            <Col span={12}>For Therapists</Col>
          </Row>
        </QuickLinks>
        <Subscription>
          <Typography.Title level={5} style={{ color: theme.copperBlue }}>
            Subscribe to our weekly newsletter
          </Typography.Title>
          <Form
            layout='inline'
          >
            <Space direction='horizontal'>
              <StyledInput placeholder='Enter your email' />
              <StyledButton>Join</StyledButton>
            </Space>
          </Form>
        </Subscription>
      </StyledRow>
      <StyledRow alignment='center'>
        <CopyRightNote style={{ margin: 0 }} type='secondary'>
          Copyrights reserved. FriendIndeed @ 2022
        </CopyRightNote>
        <Space direction='horizontal'>
          Follow Us
          <StyledAvatar size={30} shape='circle'><FacebookFilled /></StyledAvatar>
          <StyledAvatar size={30} shape='circle'><TwitterCircleFilled /></StyledAvatar>
          <StyledAvatar size={30} shape='circle'><InstagramFilled /></StyledAvatar>
        </Space>
      </StyledRow>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.primary};
  color: ${theme.copperBlue};
`;

const StyledRow = styled(Row)<{ alignment?: string }>`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.alignment || 'flex-start'};
  padding: 25px 0 15px 0;
`;

const QuickLinks = styled.div`
  width: 30%;
`;

const Subscription = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: DM Sans;
`;

const StyledInput = styled(Input)`
  border-radius: 7px;
  border: 0;
`;

const StyledButton = styled(Button)`
  background-color: ${theme.oliveGreen};
  border: 0;
  border-radius: 7px;
  color: white;
`;

const CopyRightNote = styled(Typography.Paragraph)`
  font-size: 12px;
  letter-spacing: 1;
`;

const StyledAvatar = styled(Avatar)`
  background-color: ${theme.oliveGreen};
`;