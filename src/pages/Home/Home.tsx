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
import AuthContext from '../../shared/context/AuthContext'

import { useAppSelector } from '../../redux/hooks';
import { fetchPatientsAsync, fetchTherapistsAsync, fetchUpcomingMeetingsAsync, selectData } from './Home.slice';
import { useDispatch } from 'react-redux';
import { User } from '../MyProfile/MyProfile.slice';


const Home = () => {

  const dispatch = useDispatch()
  const state = useAppSelector(selectData);  
  const categoriesloading = state.status === 'categoriesloading'
  const { user } = useContext(AuthContext)
  const userIsTherapist = user.role === User.therapist

  useEffect(() => {
    if(userIsTherapist) {
      dispatch(fetchPatientsAsync())
    }
    dispatch(fetchUpcomingMeetingsAsync({ userId: user.id, role: User.therapist }))
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