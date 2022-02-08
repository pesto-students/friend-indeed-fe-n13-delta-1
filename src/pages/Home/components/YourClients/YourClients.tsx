import React, { useCallback, useState } from 'react';
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { Typography, Input, Image, Tag } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { debounce } from 'lodash'

import theme from '../../../../shared/utils/theme';
import { Button } from '../../../../shared/components';
import { useAppSelector } from '../../../../redux/hooks';
import { fetchPatientsAsync, Patient, selectData } from '../../Home.slice';
import { useDispatch } from 'react-redux';

type PatientCardProps = {
  id: string,
  name: string,
  imageUrl: string,
  date: string,
  categories: any[],
}

const PatientCard = ({ id, name, imageUrl, date, categories }: PatientCardProps) => {

  return (
    <PatientCardContainer>
      <Picture src={imageUrl} />
      <InfoArea>
        <Typography.Title level={5}>{name}</Typography.Title>
        <p>{`Last session: ${date}`}</p>
        <>{categories.map((name) => (<StyledTag key={name} color='default'>{name}</StyledTag>))}</>
      </InfoArea>
      <ActionsArea>
        <Button
          name='View Past Sessions'
          onClick={() => null}
          width={100}
          height={30}
          buttonFontSize={12}
        />
        <Button
          name='Prescribe Treatment'
          onClick={() => null}
          width={100}
          height={30}
          buttonFontSize={12}
        />
      </ActionsArea>
    </PatientCardContainer>
  )
}

function YourClients() {

  const dispatch = useDispatch()
  const state = useAppSelector(selectData)
  const isLoading = state.status === 'patientsLoading'

  const [name, setName] = useState('')

  const searchCallback = useCallback(
    debounce(query => dispatch(fetchPatientsAsync(query)), 400),
    []
  );

  return (
    <Container>
      <Typography.Title
        level={3}
        style={{ color: theme.copperBlue, marginBottom: 20 }}
      >
        Your Clients
      </Typography.Title>
      <SearchBar allowClear placeholder={`I'm looking for...`} suffix={<SearchOutlined />} />
      {isLoading
      ? (
        Array(3).fill(0).map((_, i) => (
          <Skeleton
            key={`loader-${i}`}
            width='60vw'
            height={120}
            borderRadius={20}
            style={{ marginBottom: 20 }}
          />
        ))
      ) 
      : state.patients.map((user: Patient) => (
        <PatientCard key={`user-${user.name}}`} {...user} />
      ))}
    </Container>
  );
}

export default YourClients;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  width: 100%;
  height: 100%;
`;

const SearchBar = styled(Input)`
  border-radius: 20px;
  background-opacity: 0.2;
  width: 50vw;
  height: 100%;
  font-family: DM Sans;
  margin-bottom: 20px;
`;

const PatientCardContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: ${theme.lightblue};
  display: flex;
  align-items: center;
`;

const Picture = styled(Image)<{ src: string }>`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  background: ${theme.lightblue} url("${props => props.src}") no-repeat fixed center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  margin-right: 20px;

  $:hover {
    opacity: 0.9;
  }
`;

const InfoArea = styled.div`
  disply: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 70%;
`;

const StyledTag = styled(Tag)`
  background-color: ${theme.chip};
  color: ${theme.copperBlue};
  border-radius: 15px;
  padding: 2px 10px;
  margin-top: 10px;
  border: 0;
`;

const ActionsArea = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;