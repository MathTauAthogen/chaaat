let express = require("express")
let helmet = require("helmet")()
let app = express()

app.use(helmet)

app.get("/", function (req, res) {
  res.send("Hello World!")
})

app.listen(process.env.PORT, function () {
  console.log("Example app listening on port 80!")
})
