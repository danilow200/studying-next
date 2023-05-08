import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Button from "../components/Button";

const Container = styled.div`
  width: 95%;
  height: 79vh;
  margin: 10px auto;
  padding: 20px;
  background: ${(props) => props.theme.colors.gray[12]};
`;

export default function Home() {
  return <>
    <Header />
    <Container>
      <Button>Button 1</Button>
    </Container>
    <Footer />
  </>;
}