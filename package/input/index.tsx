import * as React from 'react';
import styled, { injectGlobal } from "styled-components";
import * as PropTypes from 'prop-types';
import { Div, Ul, PureInput } from '../base';

injectGlobal`
  * { margin: 0; padding: 0; }
`;

export interface InputProps {
  className?: string;
  style?: object;

  placeholder?: string;
  
  type?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  statement?: React.ReactNode | React.DOMElement<any, HTMLElement>;
  status?: React.ReactNode;
  onPressEnter?: React.FormEventHandler<any>;
  onKeyDown?: React.FormEventHandler<any>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.FormEventHandler<any>;
  onFocus?: React.FormEventHandler<any>;
  onBlur?: React.FormEventHandler<any>;
  autoComplete?: string;
  spellCheck?: boolean;
  autoFocus?: boolean;
}

export default class Input extends React.Component<InputProps, {}> {
  static propTypes = {
    type: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    maxLength: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    className: PropTypes.string,
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node,
    prefixCls: PropTypes.string,
    autosize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
  };
  render() {
    const {
      id,
      name,
      disabled,
      onPressEnter,
      onKeyDown,
      onChange,
      onClick,
      onFocus,
      onBlur,
      autoComplete,
      spellCheck,
      autoFocus,

      statement,
      status,
      readOnly,
      placeholder,
      ...rest
    } = this.props;

    return (<Div {...rest}>
      {statement ? <div>{statement}</div> : null}
      <Ul>
        <li>
          <PureInput type="text" />
        </li>
      </Ul>
      {status ? <div>{status}</div> : null}
    </Div>)
  }
}