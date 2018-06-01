import * as React from 'react';
import { string } from 'prop-types'
import styled, { StyledFunction } from "styled-components";

export interface FlexProps {
  inline?: boolean;
}

const Flex = styled.div`
  display: ${(p: FlexProps) => p.inline ? 'inline-flex' : 'flex'};
`;

Flex.propTypes = {
  inline: string
}

export default Flex;
