let SCROLLBAR_WIDTH = false

export function getScrollbarWidth() {
    if (SCROLLBAR_WIDTH !== false) return SCROLLBAR_WIDTH
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        const test = document.createElement('div')
        test.setAttribute('style', 'width:100px;height:100px;position:absolute;top:-999;overflow:scroll;-ms-overflow-style:scrollbar;opacity:0;top:-9999px')
        document.body.appendChild(test)
        SCROLLBAR_WIDTH = (test.offsetWidth - test.clientWidth)
        document.body.removeChild(test)
        return SCROLLBAR_WIDTH || 0
    } else {
        return 0
    }
}