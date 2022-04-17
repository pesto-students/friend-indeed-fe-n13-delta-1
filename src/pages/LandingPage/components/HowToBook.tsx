import styled from 'styled-components';
import { Steps, Typography } from 'antd';
import { LoginOutlined, FilterOutlined, CheckOutlined } from '@ant-design/icons'
import theme from '../../../shared/utils/theme';

function HowToBook() {  

  return (
    <Container id="HowToBook">
      <Typography.Title level={3} style={{ marginBottom: 20, color: theme.copperBlue }}>
        Easy to Book
      </Typography.Title>
      <Steps responsive labelPlacement='vertical' current={2}>
        <Steps.Step icon={<LoginOutlined />} title='Register' description='Login using your google account' />
        <Steps.Step icon={<FilterOutlined />} title='Select therapist' description='Select therapist according to your need' />
        <Steps.Step icon={<CheckOutlined color='success' />} title='Book a session' description='Check timeslot and book yourself a session easily' />
      </Steps>
    </Container>
  );
}

export default HowToBook;

const Container = styled.div`
  padding: 80px 20%;
  height: 400px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;