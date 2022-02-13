import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { BackTop } from 'antd'

import {
  HabitProgress,
  FilterBar,
  UpcomingMeetings,
  YourClients
} from './components';
import theme from '../../shared/utils/theme'

import { useAppSelector } from '../../redux/hooks';
import { fetchPatientsAsync, fetchUpcomingMeetingsAsync, selectData } from './Home.slice';
import { useDispatch } from 'react-redux';
import { User } from '../MyProfile/MyProfile.slice';
import { STORAGE_USER_CONSTANT } from '../../shared/utils/constants';


const Home = () => {

  const dispatch = useDispatch()
  const state = useAppSelector(selectData);  
  const categoriesloading = state.status === 'categoriesloading'
  const currentUser = JSON.parse(String(localStorage.getItem(STORAGE_USER_CONSTANT)))
  const userIsTherapist = currentUser.role === User.therapist

  useEffect(() => {
    if(userIsTherapist) {
      dispatch(fetchPatientsAsync())
    }
    dispatch(fetchUpcomingMeetingsAsync({ userId: currentUser.id, role: User.therapist }))
  }, [])

  return (
    <>
      <Wrapper>
        {!userIsTherapist && <HabitProgress />}
        <UpcomingMeetings />
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