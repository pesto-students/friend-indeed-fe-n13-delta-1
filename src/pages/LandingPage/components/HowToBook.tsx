import styled from 'styled-components';
import { Steps } from 'antd';
import { LoginOutlined, FilterOutlined, CheckOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';

function HowToBook() {  

  return (
    <Container>
      <Steps responsive labelPlacement='vertical' current={2}>
        <Steps.Step icon={<LoginOutlined />} title='Register' description='Login using your google account' />
        <Steps.Step icon={<FilterOutlined />} title='Select therapist' description='Select therapist according to your need' />
        <Steps.Step icon={<CheckOutlined />} title='Book a session' description='Check timeslot and book yourself a session easily' />
      </Steps>
    </Container>
  );
}

export default HowToBook;

const Container = styled.div`
  padding: 20px 20%;
  background-color: white;
`;