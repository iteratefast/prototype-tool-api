var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

//用来接收json数据
app.use(bodyParser.json());

//可以接收任何数据类型的数据
app.use(bodyParser.urlencoded({ extended: true }));

//跨域
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//片段
app.use("/snippets", require("./routes/snippets"));

app.listen(3000);
