import styled from "styled-components";

type StackBodySP = {
  size: number;
  point?: number;
};

type StackChildrenSP = {
  childrenNumber: number;
};

export const StackTreeUpIcon = styled.img`
  position: fixed;
  width: 5vmin;
  ltop: 10px;
  left: 20px;
`;

export const StackBody = styled.div<StackBodySP>`
  display: grid;
  width: ${props => props.size * 80}vmin;
  height: ${props => props.size * 80}vmin;
  font-size: ${props => props.size * 10}vmin;
  color: ${props => (props.point && props.point > 75 ? "black" : "white")};
  background-color: rgb(
    ${props => (props.point ? props.point * 2.56 : 1)},
    ${props => (props.point ? props.point * 2.56 : 1)},
    ${props => (props.point ? props.point * 2.56 : 1)}
  );
  border-radius: 100%;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 0 auto;
`;

export const StackDescription = styled.div`
  font-size: 2vmin;
  max-width: 50vmin;
  margin: 0 auto;
  margin-top: 2vmin;
  text-align: justify;
`;

export const StackChildren = styled.div<StackChildrenSP>`
  display: grid;
  margin-top: 0.5vmin;
  grid-gap: 1vmin;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(${props => props.childrenNumber}, auto);
`;
