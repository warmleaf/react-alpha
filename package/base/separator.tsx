import * as React from 'react';
import styled from "styled-components";
interface propsTypes {
  column?: boolean
  color?: string
  height?: string
  width?: string
}

const Separator = styled.div`
  width: ${(props:propsTypes) => props.column ? '1px' : props.width || '100%'};
  position: relative;
  height: ${(props:propsTypes) => props.column ? props.height || '100%' : '1px'};
  backface-visibility: hidden;
  transform: translateZ(0) scale(1, 1);
  z-index: 1;
  &:after {
    height: ${(props:propsTypes) => props.column ? props.height || '100%' : '1px'};
    background: ${(props:propsTypes) => props.color || '#e8e8e8'};
    background: -moz-linear-gradient(${(props:propsTypes) => !props.column ? 'left' : 'top'}, transparent 0%, ${(props:propsTypes) => props.color || '#e8e8e8'} 35%, ${(props:propsTypes) => props.color || '#e8e8e8'} 70%, transparent 100%);
    background: -webkit-linear-gradient(${(props:propsTypes) => !props.column ? 'left' : 'top'}, transparent 0%, ${(props:propsTypes) => props.color || '#e8e8e8'} 35%, ${(props:propsTypes) => props.color || '#e8e8e8'} 70%, transparent 100%);
    background: -o-linear-gradient(${(props:propsTypes) => !props.column ? 'left' : 'top'}, transparent 0%, ${(props:propsTypes) => props.color || '#e8e8e8'} 35%, ${(props:propsTypes) => props.color || '#e8e8e8'} 70%, transparent 100%);
    background: -ms-linear-gradient(${(props:propsTypes) => !props.column ? 'left' : 'top'}, transparent 0%, ${(props:propsTypes) => props.color || '#e8e8e8'} 35%, ${(props:propsTypes) => props.color || '#e8e8e8'} 70%, transparent 100%);
    background: linear-gradient(to ${(props:propsTypes) => !props.column ? 'left' : 'top'}, transparent 0%, ${(props:propsTypes) => props.color || '#e8e8e8'} 35%, ${(props:propsTypes) => props.color || '#e8e8e8'} 70%, transparent 100%);
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    left: 0;
  }
`;

export default Separator;
