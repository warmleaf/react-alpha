/* @react-alpha/base.avatar-card version 0.2.14
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";

import "prop-types";

import "styled-components";

import Flex from "@react-alpha/base.flex";

import Text from "@react-alpha/base.text";

import Avatar from "@react-alpha/base.avatar";

var _extends = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
    }
    return a;
}, objectWithoutProperties = function(a, t) {
    var e = {};
    for (var r in a) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    return e;
}, AvatarCard = function(a) {
    var t = a.avatarSrc, e = a.avatarStatus, r = a.avatarSize, o = a.avatarStatusBgColor, c = a.name, s = a.subName, n = objectWithoutProperties(a, [ "avatarSrc", "avatarStatus", "avatarSize", "avatarStatusBgColor", "name", "subName" ]);
    return React.createElement(Flex, _extends({
        className: "ra-base-avatar-card"
    }, n), React.createElement(Avatar, {
        src: t,
        status: e,
        size: r,
        statusBgColor: o
    }), React.createElement(Flex, {
        column: !0,
        hc: !s || "space-between"
    }, React.createElement(Text, {
        className: "ra-basic-ac-name"
    }, c), "string" == typeof s ? React.createElement(Text, {
        className: "ra-basic-ac-subname"
    }, s) : "function" == typeof s ? s() : s));
};

AvatarCard.propTypes = {
    /* align-self */}, AvatarCard.defaultProps = {};

export default AvatarCard;
