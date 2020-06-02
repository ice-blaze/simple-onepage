const express = require("express")
const request = require("request");
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('public'))

app.get("/", (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get("/access", (req, res, next) => {
  if (!req.query.url) {
    res.send("No url in &url= parameter");
    return ;
  }
  request({
    uri: decodeURIComponent(req.query.url),
  }).pipe(res);
});

app.get("/jsontest", (req, res) => {
  res.send({"test": 12})
})

app.get("/test", (req, res, next) => {
  request({
    uri: "http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0",
    // qs: {
    //   api_key: '123456',
    //   query: 'World of Warcraft: Legion'
    // }
  }).pipe(res);
});

