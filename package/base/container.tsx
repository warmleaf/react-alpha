import * as React from 'react';
import styled, { StyledFunction } from "styled-components";

export interface ContainerProps {
  absolute?: boolean;
  b?: string;
  bo?: string;
  bob?: string;
  bol?: string;
  bor?: string;
  bot?: string;
  br?: string;
  fixed?: boolean;
  h?: string;
  inline?: boolean;
  l?: string;
  m?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  p?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  
  relative?: boolean;
  r?: string;
  sticky?: boolean;
  t?: string;
  w?: string;
  z?: number;

}

const Container = styled.div`
  bottom: ${(p: ContainerProps) => p.b};
  border-radius: ${(p: ContainerProps) => p.br};
  border-bottom: ${(p: ContainerProps) => p.bob};
  border-left: ${(p: ContainerProps) => p.bol};
  border-right: ${(p: ContainerProps) => p.bor};
  border-top: ${(p: ContainerProps) => p.bot};
  display: ${(p: ContainerProps) => p.inline ? 'inline-flex' : 'flex'};
  height: ${(p: ContainerProps) => p.h};
  left: ${(p: ContainerProps) => p.l};
  margin: ${(p: ContainerProps) => p.m};
  margin-bottom: ${(p: ContainerProps) => p.mb};
  margin-left: ${(p: ContainerProps) => p.ml};
  margin-right: ${(p: ContainerProps) => p.mr};
  margin-top: ${(p: ContainerProps) => p.mt};
  padding: ${(p: ContainerProps) => p.p};
  padding-bottom: ${(p: ContainerProps) => p.pb};
  padding-left: ${(p: ContainerProps) => p.pl};
  padding-right: ${(p: ContainerProps) => p.pr};
  padding-top: ${(p: ContainerProps) => p.pt};
  position: ${(p: ContainerProps) => p.fixed ? 'fixed' :
    p.sticky ? 'sticky' :
      p.absolute ? 'absolute' :
        p.relative ? 'relative' : 'unset'};
  right: ${(p: ContainerProps) => p.r};
  top: ${(p: ContainerProps) => p.t};
  width: ${(p: ContainerProps) => p.w};
  z-index: ${(p: ContainerProps) => p.z};
`;

export default Container;
