import * as React from 'react';
import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const Ul = styled.ul`
  width: 100%;
  display: inline-flex;
  >li {
    width: 100%;
    display: inline-flex;
  }
`;

export const PureInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  :focus {
    outline: none;
  }
`;
