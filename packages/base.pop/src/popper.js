import styled from "styled-components";

const Popper = styled.div.attrs({
  item: props =>
    props.direcion.match(/right|left/)
      ? {
          beforeWidth: props.size,
          beforeHeight: props.height,
          translateDirecion: "Y",
          direcion: "top",
          marginDirecion: "margin-left",
          x: 0,
          y: "-50%"
        }
      : {
          beforeWidth: props.width,
          beforeHeight: props.size,
          translateDirecion: "X",
          direcion: "left",
          marginDirecion: "margin-top",
          x: "-50%",
          y: 0
        },
  marginSize: props =>
    props.direcion.match(/right|bottom/)
      ? `-${props.size}px`
      : `${props.size}px`
})`
  box-sizing: border-box;
  background-color: #222;
  color: #fff;
  border-radius: 2px;
  padding: 8px 12px;
  ${props => props.item.marginDirecion}: ${props => props.marginSize};
  &:after {
    content: "";
    transform: ${props =>
      `translate(${props.item.x}, ${props.item.y}) rotate(45deg)`};
    background-color: #222;
    width: ${props => `${props.size}px`};
    position: absolute;
    ${props => props.item.direcion}: 50%;
    ${props => props.direcion}: ${props => `-${props.size / 2}px`};
    height: ${props => `${props.size}px`};
  }
  &:before {
    content: "";
    width: ${props => `${props.item.beforeWidth}px`};
    height: ${props => `${props.item.beforeHeight}px`};
    transform: ${props => `translate${props.item.translateDirecion}(-50%)`};
    ${props => props.item.direcion}: 50%;
    position: absolute;
    ${props => props.direcion}: ${props => `-${props.size}px`};
  }
`;

export default Popper;
