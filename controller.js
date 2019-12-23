const heroData = require('./heroData')
const moment = require('moment')
module.exports = {
    // 渲染首页
    showIndex(req, res) {
        res.render('index',{})
    },
    // 渲染详情页
    showInfo(req,res){
        res.render('info',{})
    },
    // 渲染添加页
    showAdd(req,res){
        res.render('add',{})
    },
    // 渲染编辑页
    showEdit(req,res){
        res.render('edit',{})
    },
    // 获取所有英雄
    getAllHero(req,res){
          heroData.getAllhero((err, result) => {
            if (err) return res.json({
                code: 201,
                msg: '数据不存在'
            })
            res.json({
                code: 200,
                data: result
            })
      
        })
    },
    // 删除英雄
    deleteHero(req,res){ 
        heroData.deleteHero(req.query.id,(result)=>{
            if(result){
                res.json({
                    code: 200,
                    msg: '删除成功'
                })
        
            }else{
                 res.json({
                    code: 201,
                    msg: '英雄不存在'
                })
            } 
        })
    },
    // 显示详情
    getOneHero(req,res){
        heroData.getOneHero(req.query.id,(err,result)=>{
            // console.log(result)
            if (err) return res.json({
                code: 201,
                msg: '数据不存在'
            })
            res.json({
                code: 200,
                data: result
            })
      
        })
    },
    // 添加英雄
    addHero(req,res){
        let data = req.body;
        data.date = moment().format('YY-MM-DD hh:mm:ss')
        // console.log(data)
        heroData.addHero(data,result=>{
            if(result){
                res.json({
                    code: 200,
                    msg: '添加成功'
                })
        
            }else{
                 res.json({
                    code: 201,
                    msg: '添加失败'
                })
            }
        })
    },
    // 编辑英雄
    editHero(req,res){
        let data = req.body;
        data.date = moment().format('YY-MM-DD hh:mm:ss');
        heroData.editHero(data,result=>{
            if(result){
                res.json({
                    code: 200,
                    msg: '添加成功'
                })
        
            }else{
                 res.json({
                    code: 201,
                    msg: '添加失败'
                })
            }
        })
    }
}