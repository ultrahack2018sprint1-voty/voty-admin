const express = require("express")
const path = require("path")
const app = express()

const PORT = process.env.PORT || 3333
const BUILD_DIRECTORY_NAME = "dist"
const BUILD_DIRECTORY = "/" + BUILD_DIRECTORY_NAME
const BUILD_PATH = express.static(BUILD_DIRECTORY_NAME)
const INDEX_PATH = BUILD_DIRECTORY + "/index.html"
const INDEX_FILE = path.join(__dirname, INDEX_PATH)

function serveIndexHtml(_request, response) {
  return response.sendFile(INDEX_FILE)
}
function logMessage() {
  console.log("Express started at http://localhost:%d", PORT)
}

app.use(BUILD_DIRECTORY, BUILD_PATH)
app.get("*", serveIndexHtml)
app.listen(PORT, logMessage)
