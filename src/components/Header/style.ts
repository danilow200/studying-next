import styled, { keyframes } from 'styled-components';

type ContainerProps = {
    open: boolean;
  };

const pulsate = keyframes`
  100% {
    box-shadow:
      0 0 1px #fff,
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 10px #bc13fe,
      0 0 19px #bc13fe,
      0 0 20px #bc13fe,
      0 0 40px #bc13fe,
      0 0 80px #bc13fe;
  }
  0% {
    box-shadow:
      0 0 1px #fff,
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #bc13fe,
      0 0 8px #bc13fe,
      0 0 10px #bc13fe,
      0 0 45px #bc13fe,
      0 0 60px #bc13fe;
  }
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-right: 30px;
  /* background: #311465; */
  background: linear-gradient(180deg, #000, #311465);
  width: 100%;
  margin: 0px auto;
  /* border-radius: 999px; */
  /* backdrop-filter: ${({ open }) => open ? '' : 'blur(10px)'}; */
  /* box-shadow: inset 0px -15px 20px -15px #bc13fe;  */
  position: relative;
  transition: ease 300ms;
  animation: ${pulsate} 1.5s infinite alternate;  
  border-bottom: 0.2rem solid #fff;
`;

