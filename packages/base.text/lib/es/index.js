/* @react-alpha/base.text version 0.2.6
 *
 * Copyright (c) 2013-present, 
 * 
 * This source code is licensed under the ISC license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { string } from "prop-types";

import styled from "styled-components";

function pickBreakType(r) {
    switch (r) {
      case "breakAll":
        return "break-all";

      case "breakWord":
        return "break-word";

      case "noBreak":
      default:
        return "keep-all";
    }
}

const Text = styled.span`
  background: ${r => r.bg || null};
  background-color: ${r => r.bgc || null};
  border: ${r => r.b || null};
  border-bottom: ${r => r.bb || null};
  border-left: ${r => r.bl || null};
  border-radius: ${r => r.round || null};
  border-right: ${r => r.br || null};
  border-top: ${r => r.bt || null};
  text-shadow: ${r => r.shadow || null};
  box-sizing: border-box;
  color: ${r => r.c || null};
  cursor: ${r => r.cur || null};
  margin: ${r => r.m || null};
  margin-bottom: ${r => r.mb || null};
  margin-left: ${r => r.ml || null};
  margin-right: ${r => r.mr || null};
  margin-top: ${r => r.mt || null};
  font-size: ${r => r.size || null};
  padding: ${r => r.p || null};
  padding-bottom: ${r => r.pb || null};
  padding-left: ${r => r.pl || null};
  padding-right: ${r => r.pr || null};
  padding-top: ${r => r.pt || null};
  opacity: ${r => r.o || null};
  transform: ${r => r.t || null};
  transition: ${r => r.ani || null};
  width: ${r => r.w || null};
  word-break: ${r => r.break ? pickBreakType(r.break) : null};
`;

Text.propTypes = {
    /* align-self */
    as: string,
    b: string,
    /* border-bottom */
    bb: string,
    /* border-left */
    bl: string,
    /* border-radius */
    br: string,
    /* background */
    bg: string,
    /* background-color */
    bgc: string,
    /* border-top */
    bt: string,
    /* inline Text */
    inline: string,
    /* vertical center(default) */
    vc: string,
    /* horizontal center(default) */
    hc: string,
    round: string
};

export default Text;
