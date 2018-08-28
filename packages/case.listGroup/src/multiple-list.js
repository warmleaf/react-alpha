import React, { Component, cloneElement, Children } from "react";
import {
  bool,
  number,
  func,
  array,
  object,
  oneOfType,
  string,
  element
} from "prop-types";
import kindOf from "kind-of";
import Flex from "@react-alpha/base.flex";

class MultipleList extends Component {
  constructor(props) {
    super(props);
    this.init = false;
    this.state = {
      index: null
    };
  }

  _statusHandler = (self, index, expand) => {
    if (!this.init) this.init = true;
    this.setState({ index: expand ? index : -1 });
    if (self.props.onExpandStatusChange)
      self.props.onExpandStatusChange(expand);
  };

  _childrenRerender = () => {
    const { children, expand } = this.props;
    if (kindOf(children) !== "array") throw Error("expect an array children");
    return Children.map(children, (child, index) => {
      if (child.type.name === "ListGroup") {
        return cloneElement(child, {
          controlled: true,
          onExpandStatusChange: expand =>
            this._statusHandler(child, index, expand),
          expand: !this.init ? index === expand : index === this.state.index
        });
      }
      return child;
    });
  };

  render() {
    const { multiple, children, ...rest } = this.props;
    return (
      <Flex column {...rest}>
        {multiple ? children : this._childrenRerender()}
      </Flex>
    );
  }
}

MultipleList.propTypes = {
  /** if multiple is off, just expand one list at one time */
  multiple: bool,
  /** default expand index of multiple list */
  expand: number
};

MultipleList.defaultProps = {
  multiple: true,
  expand: 0
};

export default MultipleList;
