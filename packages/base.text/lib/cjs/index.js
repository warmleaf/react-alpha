/* @react-alpha/base.text version 0.2.23
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

function _interopDefault(r) {
    return r && "object" == typeof r && "default" in r ? r.default : r;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var propTypes = require("prop-types"), styled = _interopDefault(require("styled-components"));

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
  align-self: ${r => r.as || null};
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
    as: propTypes.string,
    b: propTypes.string,
    /* border-bottom */
    bb: propTypes.string,
    /* border-left */
    bl: propTypes.string,
    /* border-radius */
    br: propTypes.string,
    /* background */
    bg: propTypes.string,
    /* background-color */
    bgc: propTypes.string,
    /* border-top */
    bt: propTypes.string,
    /* inline Text */
    inline: propTypes.string,
    /* vertical center(default) */
    vc: propTypes.string,
    /* horizontal center(default) */
    hc: propTypes.string,
    round: propTypes.string
}, exports.default = Text;
