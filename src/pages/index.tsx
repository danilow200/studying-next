import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 95%;
  height: 76.6vh;
  margin: 20px auto;
  padding: 20px;
  /* background: ${(props) => props.theme.colors.gray[8]}; */
`;

export default function Home() {
  return <>
    <Header />
    <Container>
    </Container>
    <Footer />
  </>;
}