import styled from "styled-components"
import { Typography } from "antd"

import DoctorImg from "../../../shared/assets/Doctor_Isometric.png"

const ForTherapists = () => {
  return (
    <Container id="ForTherapists">
      <Illustration src={DoctorImg} />
      <Content>
        <Typography.Title level={3}>For Therapists</Typography.Title>
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
    </Container>
  )
}

export default ForTherapists

const Container = styled.div`
  padding: 50px 10%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Illustration = styled.img`
  filter: drop-shadow(10px 10px 30px #0c2461aa);
`

const Content = styled.div`
  dispaply: flex;
  flex-direction: column;
  width: 40%;
`
