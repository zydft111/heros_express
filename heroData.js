const mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'qianduan',
    dateStrings: 'true'
});
conn.connect();
module.exports = {
    // 获取所有英雄
    getAllhero(callback){
        let sql = 'select * from heros';
        conn.query(sql,(err,result)=>{
            if(err) return console.log(err);
            callback(null,result)
        })
    },
    // 删除英雄
    deleteHero(id,callback){
        let sql = `delete from heros where id=?`;
        conn.query(sql,[id],(err,result)=>{
            if(err) return callback(false);
            callback(true)
        })
    },
    // 获取英雄
    getOneHero(id,callback){
        let sql = `select * from heros where id=?`;
        conn.query(sql,id,(err,result)=>{
            if(err) return callback(err);
            callback(null,result)
        })
    },
    // 添加英雄
    addHero(obj,callback){
        let sql = `insert into heros set ?`
        conn.query(sql,[obj],(err,result)=>{
            if(err) return callback(false);
            callback(true)
        })
    },
    // 编辑英雄
    editHero(obj,callback){
        let sql = `update heros set ? where id=?`
        conn.query(sql,[obj,obj.id],(err,result)=>{
            if(err) return callback(false);
            callback(true)
        })
    }
}