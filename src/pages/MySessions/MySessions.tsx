import React from "react"
import styled from "styled-components"
import { Row, Avatar, Typography, Tag } from "antd"
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons"
import PageHeader from "../../shared/components/PageHeader"
import theme from "../../shared/utils/theme"

function MySessions() {
  const sessions = [
    {
      date: "25 Jan",
      time: "04: 00pm",
      title: "Session between Lakshitha & Dr.Khanchandani",
      categories: ["Depression","Hypertension"],
      imageUrl: "https://post.healthline.com/wp-content/uploads/2019/10/Female_Therapist_732x549-thumbnail.jpg",
      meetingLink: "https://meet.google.com/zwb-koam-dgs",
    },
    {
      date: "04 Feb",
      time: "01: 00pm",
      title: "Session between Lakshitha & Dr.Mohini",
      categories: ["Anxiety","Hypertension"],
      imageUrl: "https://post.healthline.com/wp-content/uploads/2019/10/Female_Therapist_732x549-thumbnail.jpg",
      meetingLink: "https://meet.google.com/zwb-koam-dgs",
    },
    {
      date: "16 Feb",
      time: "05: 00pm",
      title: "Session between Lakshitha & Dr.Parag",
      categories: ["Bipolar disorder"],
      imageUrl:
        "https://post.healthline.com/wp-content/uploads/2019/10/Female_Therapist_732x549-thumbnail.jpg",
      meetingLink: "https://meet.google.com/zwb-koam-dgs",
    },
  ]
  return (
    <Container>
      <PageHeader title="My Sessions" />
      <StyledRow>
        {sessions.map((session) => (
          <SessionCard>
            <Avatar src={session.imageUrl} size={50} />
            <InfoArea>
              <Typography.Title level={5}>{session.title}</Typography.Title>
              <p>{`Last session: ${session.date}`}</p>
              <>
                {session.categories.map((name) => (
                  <StyledTag key={name} color="default">
                    {name}
                  </StyledTag>
                ))}
              </>
            </InfoArea>
          </SessionCard>
        ))}
      </StyledRow>
    </Container>
  )
}

export default MySessions

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledRow = styled(Row)`
  background-color: white;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`

const SessionCard = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: ${theme.primary};
`
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 70%;
  padding: 10px;
`
const StyledTag = styled(Tag)`
  background-color: ${theme.chip};
  color: ${theme.copperBlue};
  border-radius: 15px;
  padding: 2px 10px;
  margin-top: 10px;
  border: 0;
`
