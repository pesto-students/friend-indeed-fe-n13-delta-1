import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { CalendlyEventListener, DateAndTimeSelectedEvent, PopupButton } from 'react-calendly'
import { Row, Col, Image, Typography, List, Comment, Rate } from 'antd'
import { UploadOutlined, EditFilled } from '@ant-design/icons'

import PageHeader from '../../shared/components/PageHeader';
import { DEFAULT_PROFILE_URL } from '../../shared/utils/constants';
import { Button } from '../../shared/components';
import theme from '../../shared/utils/theme';
import { useAppSelector } from '../../redux/hooks';
import { selectData } from './MyProfile.slice';

function MyProfile() {

  const state = useAppSelector(selectData)
  const loading = state.status === 'loading'
  const isTherapist = true

  return (
    <Container>
      <PageHeader title='My Profile' />
      <SubContainer>
        <ProfileColumn span={5}>
          {loading
          ? (
            <>
              <Skeleton
                width={150}
                height={150}
                borderRadius={20}
                style={{ marginBottom: 20 }}
              />
              <Skeleton
                width={150}
                height={30}
                borderRadius={20}
              />
            </>
          )
          : (
            <>
            <Picture src={DEFAULT_PROFILE_URL} />
            <StyledButton
              name='Upload Picture'
              onClick={() => null}
              width={55}
              height={30}
              buttonFontSize={5}
              icon={<UploadIcon />}
            />
          </>
        )}
        </ProfileColumn>
        <InfoColumn span={12}>
          <Title level={2} style={{ color: theme.copperBlue }}>Profile</Title>
          <P>Joel Vinay Kumar</P>
          <P>lavotivinay@gmail.com</P>
          <P>8801156292</P>
          <Title level={2} style={{ color: theme.copperBlue }}>Feedback/Rating</Title>
          <List
            header={`${2} ratings`}
            itemLayout='horizontal'
            dataSource={[
              {
                author: 'Dr. Sachidanand',
                avatar: 'https://avatars.dicebear.com/api/miniavs/joel-happy.svg',
                content: 'Very happy ith the service',
                date: new Date().toDateString(),
                rating: 3.5
              },
              {
                author: 'Dr. Suchitra',
                avatar: 'https://avatars.dicebear.com/api/miniavs/joel-happy.svg',
                content: 'Helpful session',
                date: new Date().toDateString(),
                rating: 4
              }
            ]}
            renderItem={item => (
              <Comment
                author={(
                  <p>
                    {item.author}<br />
                    <StyledRate allowHalf disabled value={item.rating} />
                  </p>
                )}
                avatar={item.avatar}
                content={item.content}
                datetime={item.date}
                actions={[
                  <span key="comment-edit">Edit</span>,
                  <span key="comment-delete">Delete</span>
                ]}
              />
            )}
          />
          <Title level={2} style={{ color: theme.copperBlue }}>Subscriptions</Title>
        </InfoColumn>
        <ActionsColumn span={7}>
          {isTherapist
          ? (
            <CalendlyEventListener
              onDateAndTimeSelected={function (e: DateAndTimeSelectedEvent){
                console.log(e.data);
              }}
            >
              <PopupButton
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideGdprBanner: true,
                  hideLandingPageDetails: false,
                  primaryColor: theme.primary,
                  textColor: theme.copperBlue,
                }}
                styles={{
                  borderRadius: 20,
                  color: theme.neonGreen,
                  backgroundColor: theme.copperBlue,
                  padding: '5px 15px',
                  border: 0,
                  cursor: 'pointer'
                }}
                prefill={{
                  email: "joelvinaykumar@gmail.com",
                  name: "John"
                }}
                text="Book Now @ 599"
                url="https://calendly.com/joelvinaykumar/15min"
              />
            </CalendlyEventListener>
          )
          : (
            <StyledButton
              name='Edit Profile'
              description='Keep your profile updated to get more bookings'
              onClick={() => null}
              width={80}
              height={60}
              icon={<EditIcon />}
            />
          )}
        </ActionsColumn>
      </SubContainer>
    </Container>
  );
}

export default MyProfile;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centrer;
`;

const SubContainer = styled(Row)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 50px;
  background-color: white;
`;

const ProfileColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Picture = styled(Image)<{ src: string }>`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: ${theme.lightblue} url("${props => props.src}") no-repeat fixed center;
  margin-bottom: 20px;

  $:hover {
    opacity: 0.9;
  }
`;

const UploadIcon = styled(UploadOutlined)`
  color: ${theme.neonGreen};
`;

const EditIcon = styled(EditFilled)`
  color: ${theme.neonGreen};
`;

const StyledButton = styled(Button)`
  border-radius: 25px;
`;

const InfoColumn = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography.Title)`
  margin-bottom: 15px;
`;

const P = styled(Typography.Text)`
  margin-bottom: 10px;
  color: ${theme.secondary};
  fpnt-size: 16px;
`;

const StyledRate = styled(Rate)`
  font-size: 12px;
  margin-left: 5px;
`;

const ActionsColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;