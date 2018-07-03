/* @react-alpha/base.text version 0.2.9
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { string } from "prop-types";

import styled from "styled-components";

function pickBreakType(l) {
    switch (l) {
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
  align-self: ${l => l.as || null};
  background: ${l => l.bg || null};
  background-color: ${l => l.bgc || null};
  border: ${l => l.b || null};
  border-bottom: ${l => l.bb || null};
  border-left: ${l => l.bl || null};
  border-radius: ${l => l.round || null};
  border-right: ${l => l.br || null};
  border-top: ${l => l.bt || null};
  text-shadow: ${l => l.shadow || null};
  box-sizing: border-box;
  color: ${l => l.c || null};
  cursor: ${l => l.cur || null};
  margin: ${l => l.m || null};
  margin-bottom: ${l => l.mb || null};
  margin-left: ${l => l.ml || null};
  margin-right: ${l => l.mr || null};
  margin-top: ${l => l.mt || null};
  font-size: ${l => l.size || null};
  padding: ${l => l.p || null};
  padding-bottom: ${l => l.pb || null};
  padding-left: ${l => l.pl || null};
  padding-right: ${l => l.pr || null};
  padding-top: ${l => l.pt || null};
  opacity: ${l => l.o || null};
  transform: ${l => l.t || null};
  transition: ${l => l.ani || null};
  width: ${l => l.w || null};
  word-break: ${l => l.break ? pickBreakType(l.break) : null};
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
