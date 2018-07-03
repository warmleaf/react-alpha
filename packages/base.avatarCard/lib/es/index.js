/* @react-alpha/base.avatar-card version 0.2.10
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes, { string } from "prop-types";

import styled, { injectGlobal } from "styled-components";

import React from "react";

/* @react-alpha/base.flex version 0.2.10
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const Flex = styled.div`
  align-items: ${n => n.column ? n.vc ? !0 === n.vc ? "center" : n.vc : null : n.hc ? !0 === n.hc ? "center" : n.hc : null};
  align-self: ${n => n.as || null};
  background: ${n => n.bg || null};
  background-color: ${n => n.bgc || null};
  background-image: ${n => n.bgi ? "url(" + n.bgi + ")" : null};
  background-repeat: ${n => n.noRepeatBg ? "no-repeat" : null};
  background-size: ${n => n.bgi ? n.bgs || "100%" : n.bgs || null};
  border: ${n => n.b || null};
  border-bottom: ${n => n.bb || null};
  border-color: ${n => n.bc || null};
  border-left: ${n => n.bl || null};
  border-radius: ${n => n.round || null};
  border-right: ${n => n.br || null};
  border-style: ${n => n.bs || null};
  border-top: ${n => n.bt || null};
  border-width: ${n => n.bw || null};
  bottom: ${n => n.bm || null};
  box-shadow: ${n => n.shadow || null};
  box-sizing: border-box;
  color: ${n => n.c || null};
  cursor: ${n => n.cur || null};
  display: ${n => n.hidden ? "none" : n.inline ? "inline-flex" : "flex"};
  height: ${n => n.h || null};
  justify-content: ${n => n.column ? n.hc ? !0 === n.hc ? "center" : n.hc : null : n.vc ? !0 === n.vc ? "center" : n.vc : null};
  left: ${n => n.lt || null};
  margin: ${n => n.m || null};
  margin-bottom: ${n => n.mb || null};
  margin-left: ${n => n.ml || null};
  margin-right: ${n => n.mr || null};
  margin-top: ${n => n.mt || null};
  max-height: ${n => n.mah || null};
  max-width: ${n => n.maw || null};
  min-height: ${n => n.mih || null};
  min-width: ${n => n.miw || null};
  flex: ${n => n.full ? 1 : null};
  flex-direction: ${n => n.column ? "column" : null};
  flex-wrap: ${n => n.wrap ? "wrap" : null};
  font-size: ${n => n.size || null};
  padding: ${n => n.p || null};
  padding-bottom: ${n => n.pb || null};
  padding-left: ${n => n.pl || null};
  padding-right: ${n => n.pr || null};
  padding-top: ${n => n.pt || null};
  position: ${n => n.absolute ? "absolute" : n.relative ? "relative" : null};
  opacity: ${n => n.o || null};
  overflow: ${n => n.nonOverflow ? "hidden" : n.scroll ? "scroll" : "auto"};
  right: ${n => n.rt || null};
  top: ${n => n.tp || null};
  text-align: ${n => n.tps || null};
  transform: ${n => n.t || null};
  transition: ${n => n.ani || null};
  width: ${n => n.w || null};
  z-index: ${n => n.z || null};
  -webkit-overflow-scrolling: ${n => n.rebound || null};
`;

/* @react-alpha/base.text version 0.2.9
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function pickBreakType(n) {
    switch (n) {
      case "breakAll":
        return "break-all";

      case "breakWord":
        return "break-word";

      case "noBreak":
      default:
        return "keep-all";
    }
}

Flex.propTypes = {
    /* align-self */
    as: PropTypes.string,
    b: PropTypes.string,
    /* border-bottom */
    bb: PropTypes.string,
    /* border-left */
    bl: PropTypes.string,
    /* border-radius */
    br: PropTypes.string,
    /* background */
    bg: PropTypes.string,
    /* background-color */
    bgc: PropTypes.string,
    /* border-top */
    bt: PropTypes.string,
    /* inline flex */
    inline: PropTypes.string,
    /* vertical center(default) */
    vc: PropTypes.string,
    /* horizontal center(default) */
    hc: PropTypes.string,
    round: PropTypes.string
};

const Text = styled.span`
  align-self: ${n => n.as || null};
  background: ${n => n.bg || null};
  background-color: ${n => n.bgc || null};
  border: ${n => n.b || null};
  border-bottom: ${n => n.bb || null};
  border-left: ${n => n.bl || null};
  border-radius: ${n => n.round || null};
  border-right: ${n => n.br || null};
  border-top: ${n => n.bt || null};
  text-shadow: ${n => n.shadow || null};
  box-sizing: border-box;
  color: ${n => n.c || null};
  cursor: ${n => n.cur || null};
  margin: ${n => n.m || null};
  margin-bottom: ${n => n.mb || null};
  margin-left: ${n => n.ml || null};
  margin-right: ${n => n.mr || null};
  margin-top: ${n => n.mt || null};
  font-size: ${n => n.size || null};
  padding: ${n => n.p || null};
  padding-bottom: ${n => n.pb || null};
  padding-left: ${n => n.pl || null};
  padding-right: ${n => n.pr || null};
  padding-top: ${n => n.pt || null};
  opacity: ${n => n.o || null};
  transform: ${n => n.t || null};
  transition: ${n => n.ani || null};
  width: ${n => n.w || null};
  word-break: ${n => n.break ? pickBreakType(n.break) : null};
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

var _extends = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
    }
    return n;
}, objectWithoutProperties = function(n, r) {
    var t = {};
    for (var e in n) r.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
    return t;
}, taggedTemplateLiteral = function(n, r) {
    return Object.freeze(Object.defineProperties(n, {
        raw: {
            value: Object.freeze(r)
        }
    }));
}, _templateObject2 = taggedTemplateLiteral([ "\n  align-items: ", ";\n  align-self: ", ";\n  background: ", ";\n  background-color: ", ";\n  background-image: ", ";\n  background-repeat: ", ";\n  background-size: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  border-color: ", ";\n  border-left: ", ";\n  border-radius: ", ";\n  border-right: ", ";\n  border-style: ", ";\n  border-top: ", ";\n  border-width: ", ";\n  bottom: ", ";\n  box-shadow: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: ", ";\n  display: ", ";\n  height: ", ";\n  justify-content: ", ";\n  left: ", ";\n  margin: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-top: ", ";\n  max-height: ", ";\n  max-width: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  flex: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  font-size: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: ", ";\n  position: ", ";\n  opacity: ", ";\n  overflow: ", ";\n  right: ", ";\n  top: ", ";\n  text-align: ", ";\n  transform: ", ";\n  transition: ", ";\n  width: ", ";\n  z-index: ", ";\n  -webkit-overflow-scrolling: ", ";\n" ], [ "\n  align-items: ", ";\n  align-self: ", ";\n  background: ", ";\n  background-color: ", ";\n  background-image: ", ";\n  background-repeat: ", ";\n  background-size: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  border-color: ", ";\n  border-left: ", ";\n  border-radius: ", ";\n  border-right: ", ";\n  border-style: ", ";\n  border-top: ", ";\n  border-width: ", ";\n  bottom: ", ";\n  box-shadow: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: ", ";\n  display: ", ";\n  height: ", ";\n  justify-content: ", ";\n  left: ", ";\n  margin: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-top: ", ";\n  max-height: ", ";\n  max-width: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  flex: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  font-size: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: ", ";\n  position: ", ";\n  opacity: ", ";\n  overflow: ", ";\n  right: ", ";\n  top: ", ";\n  text-align: ", ";\n  transform: ", ";\n  transition: ", ";\n  width: ", ";\n  z-index: ", ";\n  -webkit-overflow-scrolling: ", ";\n" ]), Flex$1 = styled.div(_templateObject2, function(n) {
    return n.column ? n.vc ? !0 === n.vc ? "center" : n.vc : null : n.hc ? !0 === n.hc ? "center" : n.hc : null;
}, function(n) {
    return n.as || null;
}, function(n) {
    return n.bg || null;
}, function(n) {
    return n.bgc || null;
}, function(n) {
    return n.bgi ? "url(" + n.bgi + ")" : null;
}, function(n) {
    return n.noRepeatBg ? "no-repeat" : null;
}, function(n) {
    return n.bgi ? n.bgs || "100%" : n.bgs || null;
}, function(n) {
    return n.b || null;
}, function(n) {
    return n.bb || null;
}, function(n) {
    return n.bc || null;
}, function(n) {
    return n.bl || null;
}, function(n) {
    return n.round || null;
}, function(n) {
    return n.br || null;
}, function(n) {
    return n.bs || null;
}, function(n) {
    return n.bt || null;
}, function(n) {
    return n.bw || null;
}, function(n) {
    return n.bm || null;
}, function(n) {
    return n.shadow || null;
}, function(n) {
    return n.c || null;
}, function(n) {
    return n.cur || null;
}, function(n) {
    return n.hidden ? "none" : n.inline ? "inline-flex" : "flex";
}, function(n) {
    return n.h || null;
}, function(n) {
    return n.column ? n.hc ? !0 === n.hc ? "center" : n.hc : null : n.vc ? !0 === n.vc ? "center" : n.vc : null;
}, function(n) {
    return n.lt || null;
}, function(n) {
    return n.m || null;
}, function(n) {
    return n.mb || null;
}, function(n) {
    return n.ml || null;
}, function(n) {
    return n.mr || null;
}, function(n) {
    return n.mt || null;
}, function(n) {
    return n.mah || null;
}, function(n) {
    return n.maw || null;
}, function(n) {
    return n.mih || null;
}, function(n) {
    return n.miw || null;
}, function(n) {
    return n.full ? 1 : null;
}, function(n) {
    return n.column ? "column" : null;
}, function(n) {
    return n.wrap ? "wrap" : null;
}, function(n) {
    return n.size || null;
}, function(n) {
    return n.p || null;
}, function(n) {
    return n.pb || null;
}, function(n) {
    return n.pl || null;
}, function(n) {
    return n.pr || null;
}, function(n) {
    return n.pt || null;
}, function(n) {
    return n.absolute ? "absolute" : n.relative ? "relative" : null;
}, function(n) {
    return n.o || null;
}, function(n) {
    return n.nonOverflow ? "hidden" : n.scroll ? "scroll" : "auto";
}, function(n) {
    return n.rt || null;
}, function(n) {
    return n.tp || null;
}, function(n) {
    return n.tps || null;
}, function(n) {
    return n.t || null;
}, function(n) {
    return n.ani || null;
}, function(n) {
    return n.w || null;
}, function(n) {
    return n.z || null;
}, function(n) {
    return n.rebound || null;
});

Flex$1.propTypes = {
    /* align-self */
    as: PropTypes.string,
    b: PropTypes.string,
    /* border-bottom */
    bb: PropTypes.string,
    /* border-left */
    bl: PropTypes.string,
    /* border-radius */
    br: PropTypes.string,
    /* background */
    bg: PropTypes.string,
    /* background-color */
    bgc: PropTypes.string,
    /* border-top */
    bt: PropTypes.string,
    /* inline flex */
    inline: PropTypes.string,
    /* vertical center(default) */
    vc: PropTypes.string,
    /* horizontal center(default) */
    hc: PropTypes.string,
    round: PropTypes.string
};

var _extends$1 = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
    }
    return n;
}, objectWithoutProperties$1 = function(n, r) {
    var t = {};
    for (var e in n) r.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
    return t;
}, taggedTemplateLiteral$1 = function(n, r) {
    return Object.freeze(Object.defineProperties(n, {
        raw: {
            value: Object.freeze(r)
        }
    }));
}, _templateObject = taggedTemplateLiteral$1([ "\n  .ra-base-flex > img {\n    width: 100%;\n    height: 100%;\n  }\n" ], [ "\n  .ra-base-flex > img {\n    width: 100%;\n    height: 100%;\n  }\n" ]);

function pickColor(n) {
    switch (n) {
      case "dnd":
        return "#f04747";

      case "idle":
        return "#faa61a";

      case "on":
        return "#43b581";

      case "off":
      default:
        return "#747f8d";
    }
}

injectGlobal(_templateObject);

var Avatar = function(n) {
    var r = n.src, t = n.status, e = n.size, l = n.statusBgColor, o = objectWithoutProperties$1(n, [ "src", "status", "size", "statusBgColor" ]);
    return React.createElement(Flex$1, _extends$1({
        relative: !0,
        className: "ra-base-avatar",
        w: e,
        h: e
    }, o), React.createElement(Flex$1, {
        full: !0,
        noRepeatBg: !0,
        round: "50%",
        bgi: r
    }), React.createElement(Flex$1, {
        absolute: !0,
        rt: .0214466094 * parseInt(e) + "px",
        bm: .0214466094 * parseInt(e) + "px",
        bc: l || "#fff",
        bw: .0425 * parseInt(e) + "px",
        bs: "solid",
        round: "50%",
        w: .2928932188 * parseInt(e) + "px",
        h: .2928932188 * parseInt(e) + "px",
        bgc: pickColor(t)
    }));
};

Avatar.propTypes = {
    /* align-self */
    size: string
}, Avatar.defaultProps = {
    size: "32px"
};

var AvatarCard = function(n) {
    var r = n.avatarSrc, t = n.avatarStatus, e = n.avatarSize, l = n.avatarStatusBgColor, o = n.name, i = n.subName, u = objectWithoutProperties(n, [ "avatarSrc", "avatarStatus", "avatarSize", "avatarStatusBgColor", "name", "subName" ]);
    return React.createElement(Flex, _extends({
        className: "ra-base-avatar-card"
    }, u), React.createElement(Avatar, {
        src: r,
        status: t,
        size: e,
        statusBgColor: l
    }), React.createElement(Flex, {
        column: !0,
        hc: !i || "space-between"
    }, React.createElement(Text, {
        className: "ra-basic-ac-name"
    }, o), "string" == typeof i ? React.createElement(Text, {
        className: "ra-basic-ac-subname"
    }, i) : "function" == typeof i ? i() : i));
};

AvatarCard.propTypes = {
    /* align-self */}, AvatarCard.defaultProps = {};

export default AvatarCard;
