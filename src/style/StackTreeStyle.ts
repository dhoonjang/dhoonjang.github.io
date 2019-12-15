import styled from "styled-components";

type StackBodySP = {
  size: number;
  point?: number;
};

type StackChildrenSP = {
  childrenNumber: number;
};

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

export const StackChildren = styled.div<StackChildrenSP>`
  display: grid;
  margin-top: 5px;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(${props => props.childrenNumber}, auto);
`;
