var express = require("express"),
    router = express.Router(),
    mysql = require("../module/mysql");

//列表
router.post("/list", (req, res) => {
    let json = req.body;
    mysql({
        res,
        sql: "SELECT * from list where no like '%" + (json.no || "") + "%' && name like '%" + (json.name || "") + "%' order by no desc",
        success(data) {
           return {
               
           }
        }
    });
});
module.exports = router;
