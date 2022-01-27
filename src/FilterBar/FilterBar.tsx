import React from 'react';
import styled from 'styled-components'
import { Row, Col, Select, Input } from 'antd'

import Button from '../shared/components/Button';

function FilterBar() {

  const { Option } = Select
  type OptionType = { code: string , name: string }

  const issues = [
    { name: 'Depression', code: 'DEP' },
    { name: 'Anxiety', code: 'ANX' },
    { name: 'Bi-polar disorder', code: 'BPD' }
  ]

  const ratings = [
    { name: '1', code: '1' },
    { name: '2', code: '2' },
    { name: '3', code: '3' },
    { name: '4', code: '4' },
    { name: '5', code: '5' },
  ]

  const experiences = [
    { name: '< 5 years', code: '5' },
    { name: '< 8 years', code: '5' },
    { name: '< 10 years', code: '10' },
    { name: '< 15 years', code: '15' },
    { name: '< 20 years', code: '20' },
  ]

  const fees = [
    { name: '< 500', code: '500' },
    { name: '< 800', code: '800' },
    { name: '< 1000', code: '1000' },
    { name: '< 1500', code: '1500' },
  ]

  const inputs = [
    { placholder: 'Issue', items: issues },
    { placholder: 'Rating', items: ratings },
    { placholder: 'Experience', items: experiences },
    { placholder: 'Consultation Fee', items: fees }
  ]

  return (
    <Container>
      <StyledRow gutter={[16, 24]}>
        {inputs.map(({ placholder, items }, index) => (
          <Col span={5} key={index}>
            <StyledSelect placeholder={placholder}>
              {items.map(({ code, name }: OptionType) => <Option key={code}>{name}</Option>)}
            </StyledSelect>
          </Col>
        ))}
      </StyledRow>
      <StyledRow>
        <Col span={15}>
          <Input placeholder='Search by name' suffix={'🔍'} />
        </Col>
        <Col span={6}>
          <Button width={100} name='Apply Filters' onClick={() => null} />
        </Col>
      </StyledRow>
    </Container>
  );
}

export default FilterBar;

const Container = styled.div`
  width: 80%;
  border-radius: 15px;
  margin: 20px 0 30px 0;
  padding: 10px;
  background-color: rgba(7, 48, 66, 0.2);
  margin: 0 auto;
  font-family: DM Sans;
  font-weight: medium;
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  margin: 20px 0;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  font-family: DM Sans;
`;