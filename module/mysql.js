const mysql = require("mysql");
module.exports = function(config) {
    //数据库服务配置
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "snippets"
    });

    //创建连接
    connection.connect();

    //执行SQL语句
    connection.query(config.sql, config.values, (err, data) => {
        if (err) {
            config.res &&
                config.res.json({
                    code: err.code,
                    success: false,
                    msg: err.sqlMessage,
                    data: null
                });
        } else {
            config.res &&
                config.res.json({
                    code: 200,
                    success: true,
                    msg: "成功",
                    data: (config.success && config.success(data)) || null
                });
        }
    });

    //断开连接
    connection.end();
};
