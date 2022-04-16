import styled from "styled-components";

const Container = styled.button`
  font-weight: bold;
  border: 2px solid red;
`;

export function Button() {
  return <Container id="changeColor">change color</Container>;
}

export default Button;
