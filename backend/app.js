const express = require("express")
const path = require("path")
const http = require("http")
const fileUpload = require("express-fileupload")

const mongodb = require("./db/mongoConnect")
const { routerInit, originAllow } = require("./routes/config_routes")

const app = express()

app.use(
  fileUpload({
    limit: { fileSize: 5 * 1024 * 1024 },
  })
)

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

originAllow(app)
routerInit(app)

const server = http.createServer(app)

let port = process.env.PORT || "3400"
server.listen(port)
