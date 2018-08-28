import { string } from "prop-types";
import styled from "styled-components";

const Separator = styled.div`
  backface-visibility: hidden;
  height: ${props => (props.vertical ? props.h || "100%" : "1px")};
  margin: ${props => props.m || null};
  margin-bottom: ${props => props.mb || null};
  margin-left: ${props => props.ml || null};
  margin-right: ${props => props.mr || null};
  margin-top: ${props => props.mt || null};
  position: relative;
  transform: translateZ(0) scale(1, 1);
  width: ${props => (props.vertical ? "1px" : props.w || "100%")};
  z-index: 1;
  &:after {
    height: ${props => (props.vertical ? props.h || "100%" : "1px")};
    background: ${props => props.co || "#e8e8e8"};
    background: -moz-linear-gradient(
      ${props => (!props.vertical ? "left" : "top")},
      transparent 0%,
      ${props => props.co || "#e8e8e8"} 35%,
      ${props => props.co || "#e8e8e8"} 70%,
      transparent 100%
    );
    background: -webkit-linear-gradient(
      ${props => (!props.vertical ? "left" : "top")},
      transparent 0%,
      ${props => props.co || "#e8e8e8"} 35%,
      ${props => props.co || "#e8e8e8"} 70%,
      transparent 100%
    );
    background: -o-linear-gradient(
      ${props => (!props.vertical ? "left" : "top")},
      transparent 0%,
      ${props => props.co || "#e8e8e8"} 35%,
      ${props => props.co || "#e8e8e8"} 70%,
      transparent 100%
    );
    background: -ms-linear-gradient(
      ${props => (!props.vertical ? "left" : "top")},
      transparent 0%,
      ${props => props.co || "#e8e8e8"} 35%,
      ${props => props.co || "#e8e8e8"} 70%,
      transparent 100%
    );
    background: linear-gradient(
      to ${props => (!props.vertical ? "left" : "top")},
      transparent 0%,
      ${props => props.co || "#e8e8e8"} 35%,
      ${props => props.co || "#e8e8e8"} 70%,
      transparent 100%
    );
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    left: 0;
  }
`;

Separator.propTypes = {
  vertical: string
};

export default Separator;
