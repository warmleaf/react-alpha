import { injectGlobal } from 'styled-components'

injectGlobal`
  .CodeMirror-overlayscroll .CodeMirror-scrollbar-filler, .CodeMirror-overlayscroll .CodeMirror-gutter-filler {
    display: none;
  }

  .CodeMirror:hover .CodeMirror-overlayscroll-horizontal,
  .CodeMirror:hover .CodeMirror-overlayscroll-vertical {
    opacity: 1;
  }

  .CodeMirror-overlayscroll-horizontal div, .CodeMirror-overlayscroll-vertical div {
    position: absolute;
    background: rgba(0,0,0,.5);
    border-radius: 3px;
  }

  .CodeMirror-overlayscroll-horizontal, .CodeMirror-overlayscroll-vertical {
    position: absolute;
    z-index: 6;
  }

  .CodeMirror-overlayscroll-horizontal {
    bottom: 0; left: 0;
    height: 6px;
    opacity: 0;
    transition: opacity 200ms;
  }
  .CodeMirror-overlayscroll-horizontal div {
    bottom: 0;
    height: 100%;
  }

  .CodeMirror-overlayscroll-vertical {
    right: 0; top: 0;
    width: 6px;
    opacity: 0;
    transition: opacity 200ms;
  }
  .CodeMirror-overlayscroll-vertical div {
    right: 0;
    width: 100%;
  }
`