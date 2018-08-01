/* @react-alpha/base.avatar-card version 0.2.24
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

function _interopDefault(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var React = require("react"), React__default = _interopDefault(React);

require("prop-types"), require("styled-components");

var Flex = _interopDefault(require("@react-alpha/base.flex")), Text = _interopDefault(require("@react-alpha/base.text")), Avatar = _interopDefault(require("@react-alpha/base.avatar")), _extends = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
}, objectWithoutProperties = function(e, a) {
    var t = {};
    for (var r in e) a.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t;
}, AvatarCard = function(e) {
    var a = e.avatarSrc, t = e.avatarStatus, r = e.avatarSize, c = e.avatarStatusBgColor, o = e.name, s = e.subName, u = objectWithoutProperties(e, [ "avatarSrc", "avatarStatus", "avatarSize", "avatarStatusBgColor", "name", "subName" ]);
    return React__default.createElement(Flex, _extends({
        className: "ra-base-avatar-card"
    }, u), React__default.createElement(Avatar, {
        src: a,
        status: t,
        size: r,
        statusBgColor: c
    }), React__default.createElement(Flex, {
        column: !0,
        hc: !s || "space-between"
    }, React__default.createElement(Text, {
        className: "ra-basic-ac-name"
    }, o), "string" == typeof s ? React__default.createElement(Text, {
        className: "ra-basic-ac-subname"
    }, s) : "function" == typeof s ? s() : s));
};

AvatarCard.propTypes = {
    /* align-self */}, AvatarCard.defaultProps = {}, exports.default = AvatarCard;
