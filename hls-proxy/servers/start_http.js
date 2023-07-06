const http = require('http')

const start_server = function ({ port }) {
  if (!port || isNaN(port)) port = 3030

  const server = http.createServer()

  server.listen(port, function () {
    console.log(`HTTP server is listening on port: ${port}`)
  })

  return server
}

module.exports = start_server
