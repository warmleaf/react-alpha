require('gh-pages').publish('storybook-static', {}, rsp => {
    if (rsp.message) throw (message)
    if (rsp.output) console.log(rsp.output)
})