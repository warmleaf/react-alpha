import React from "react";
import { storiesOf } from "@storybook/react";
import TwoLevelMenu from "../src/two-level-menu";
import Text from "@react-alpha/base.text";
import Plugin from '../../base.icon/src/plugin'

storiesOf("Case Component|List Group", module).addAPIDoc("Two Level Menu", {
  comment: "this is a description for TwoLevelMenu",
  platform: "pc",
  scope: {
    TwoLevelMenu,
    Plugin,
    Text
  },
  code: `
<TwoLevelMenu 
  expand={false}
  data={[
    { label: "bose menu 01" },
    { label: "bose menu 02" },
    {
      label: "bose menu 03",
      children: [{ label: "bose menu 03-1" }, { label: "bose menu 03-2" }]
    },
    { label: "bose menu 04" },
    {
      label: "bose menu 05",
      children: [{ label: "bose menu 05-1" }, { label: "bose menu 05-2" }]
    }
  ]}
  itemRender={({label}, expand) => <Text className="item"><Plugin />{expand && label}</Text>}
  avatarRender={name => <Plugin />}
  multiple={true}
/>
      `
});
