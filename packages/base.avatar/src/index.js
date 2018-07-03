import React, { Component } from 'react'
import { string } from 'prop-types'
import { injectGlobal } from 'styled-components'
import Flex from '../../base.flex'

injectGlobal`
  .ra-base-flex > img {
    width: 100%;
    height: 100%;
  }
`

function pickColor(status) {
  switch (status) {
    case 'dnd':
      return '#f04747'
    case 'idle':
      return '#faa61a'
    case 'on':
      return '#43b581'
    case 'off':
    default:
      return '#747f8d'
  }
}

const Avatar = ({ src, status, size, statusBgColor, ...rest }) => (
  <Flex
    relative
    nonOverflow
    className="ra-base-avatar"
    w={size}
    h={size}
    {...rest}
  >
    <Flex
      full
      noRepeatBg
      round="50%"
      bgi={src}
    />
    <Flex
      absolute
      rt={`${parseInt(size) * -.0732233047}px`}
      bm={`${parseInt(size) * -.0732233047}px`}
      bc={statusBgColor || '#fff'}
      bw={`${parseInt(size) * .0732233047}px`}
      bs="solid"
      round="50%"
      w={`${parseInt(size) * .4393398282}px`}
      h={`${parseInt(size) * .4393398282}px`}
      bgc={pickColor(status)}
    />
  </Flex>
)
// 2928932188
// 0214466094
Avatar.propTypes = {
  /* align-self */
  size: string,
}

Avatar.defaultProps = {
  size: '32px'
}

export default Avatar
