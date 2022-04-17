import styled from "styled-components"
import { Typography } from "antd"

import PatientImg from "../../../shared/assets/Patient_Isometric.png"

const ForPatients = () => {
  return (
    <Container id="ForPatients">
      <Content>
        <Typography.Title level={3}>For Patients</Typography.Title>
        <Typography.Text style={{ fontSize: 16 }}>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and
          web page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Typography.Text>
      </Content>
      <Illustration src={PatientImg} />
    </Container>
  )
}

export default ForPatients

const Container = styled.div`
  padding: 50px 10%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const Illustration = styled.img`
  filter: drop-shadow(10px 10px 30px #b7154070);
`

const Content = styled.div`
  dispaply: flex;
  flex-direction: column;
  width: 40%;
`
