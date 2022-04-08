import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'
import { BackTop, Space, Alert, Row, Col } from 'antd'

import {
  HabitProgress,
  FilterBar,
  YourClients
} from './components';
import theme from '../../shared/utils/theme'
import { Button } from '../../shared/components'

import { useAppSelector } from '../../redux/hooks';
import { selectData } from './Home.slice';
import { User } from '../MyProfile/MyProfile.slice';
import { ROUTES, STORAGE_USER_CONSTANT } from '../../shared/utils/constants';
import { useState } from 'react';


const Home = () => {

  const state = useAppSelector(selectData);
  const navigate = useNavigate()  
  const categoriesloading = state.status === 'categoriesloading'
  const currentUser = JSON.parse(String(localStorage.getItem(STORAGE_USER_CONSTANT)))
  const userIsTherapist = currentUser.role === User.therapist

  const routeToProfile = () => navigate(`${ROUTES.MY_PROFILE}?userId=${currentUser.id}&edit-profile=true`)

  return (
    <>
      <Wrapper>
        {!userIsTherapist && <HabitProgress />}
        {userIsTherapist && (
          !currentUser.about
          ||  !currentUser.experience
          ||  !currentUser.consultationFee
          ||  !currentUser.imageUrl
          ||  !currentUser.bookingUrl
          ||  !currentUser.categories
        ) && (
          <StyledRow justify='center'>
            <Col span={8}>
              <StyledAlert
                closable
                message="Your profile seems incomplete"
                type="warning"
                style={{ borderRadius: 10 }}
                action={
                  <Space>
                    <Button
                      name='Add Missing Details'
                      width={100}
                      buttonFontSize={11}
                      onClick={routeToProfile}
                    />
                  </Space>
                }
              />
            </Col>
          </StyledRow>
        )}
      </Wrapper>
      <FilterArea>
        {userIsTherapist
        ? <YourClients />
        : categoriesloading
          ? <Skeleton width='80vw' height={100} borderRadius={20} />
          : <FilterBar />
        }
      </FilterArea>
      <BackTop />
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: ${theme.primary};
`;

const FilterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 30px;
`;

const StyledRow = styled(Row)`
  padding: 30px 0;
`;

const StyledAlert = styled(Alert)`
  border-radius: 10px;
`;