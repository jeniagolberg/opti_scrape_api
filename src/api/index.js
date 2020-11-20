const exampleRoute = require('./example/example.controller')
const crawlRoute = require('./crawl/crawl.controller')
const graphsRoute = require('./graphs/graphs.controller')
const tableRoute = require('./tables/tables.controller')

module.exports = [
    exampleRoute,
    crawlRoute,
    graphsRoute,
    tableRoute,
]
