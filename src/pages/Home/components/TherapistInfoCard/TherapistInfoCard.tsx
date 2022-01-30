import styled from 'styled-components';
import { Avatar, Typography, Tag } from 'antd'
import { useNavigate } from 'react-router-dom'

import theme from '../../../../shared/utils/theme';
import { Button } from '../../../../shared/components';
import { CategoryProps } from '../../HomeSlice';

export type TherapistInfoCardProps = {
  id: string,
  name: string,
  imageUrl: string,
  experience: number,
  rating: number,
  consultationFee: number,
  categories: CategoryProps[],
}

function TherapistInfoCard({
  id,
  name,
  imageUrl,
  experience,
  rating,
  consultationFee,
  categories
}: TherapistInfoCardProps) {

  const navigate = useNavigate();

  const cardCategories = categories.length>3
  ? categories.slice(0, 3).map(c => c.name).concat(`+${categories.length-3} more`)
  : categories.map(c => c.name)

  return (
    <Card style={{margin: 0}}>
      <PictureDiv>
        {imageUrl
        ? <Avatar size={120} src={imageUrl} />
        : <Avatar size={120}>{name[0]}</Avatar>
        }
      </PictureDiv>
      <InfoDiv>
        <Info>
          <Title>Dr. {name}</Title>
          <SubTitle>M.A, M.Phil, Psycology</SubTitle>
          {!!experience && <SubTitle>{`${experience} years of experience`}</SubTitle>}
        </Info>
        {rating && (
          <p>
            {/* <StarIcon /> */}
            {rating}/5
          </p>
        )}
      </InfoDiv>
      <CategoriesDiv>
        {cardCategories.map((name) => (<StyledTag color='default'>{name}</StyledTag>))}
      </CategoriesDiv>
      <FooterDiv>
        <Rate>
          &#8377; {consultationFee}
          <PerSession>/ Session</PerSession>
        </Rate>
        <Button width={38} buttonFontSize={12} name='Book Now' onClick={() => navigate('my-profile')} />
      </FooterDiv>
    </Card>
  );
}

export default TherapistInfoCard;

const Card = styled.div`  
  border-radius: 15px;
  background-color: ${theme.lightblue};
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 15px;
`;

const PictureDiv = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const InfoDiv = styled.div`
  height: 20%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const CategoriesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledTag = styled(Tag)`
  background-color: ${theme.chip};
  color: ${theme.copperBlue};
  border-radius: 15px;
  padding: 2px 8px;
  border: 0;
`;

const FooterDiv = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography.Text)`
  font-size: 20px
`;

const SubTitle = styled(Typography.Text)`
  font-size: 12px;
  color: ${theme.secondaryText};
`;

const Rate = styled(Typography.Text)`
  font-size: 13px;
  color: ${theme.copperBlue};
`;

const PerSession = styled(Typography.Text)`
  color: ${theme.secondaryText};
`;
