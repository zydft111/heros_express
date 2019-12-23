const express = require('express');
let router = express.Router();
const control = require('./controller');
// const urlModel = require('url');

router.get('/',(req,res)=>{
    control.showIndex(req,res)
})
.get('/add',(req,res)=>{
    control.showAdd(req,res)
})
.get('/edit',(req,res)=>{
    control.showEdit(req,res)
})
.get('/info',(req,res)=>{
    control.showInfo(req,res)
})
.get('/getAllHero',(req,res)=>{
    control.getAllHero(req,res)
})
.get('/deleteHero',(req,res)=>{
    control.deleteHero(req,res)
})
.get('/getHeroInfo',(req,res)=>{
    control.getOneHero(req,res)
})
.post('/addHero',(req,res)=>{
    control.addHero(req,res)
})
.post('/editHero',(req,res)=>{
    control.editHero(req,res)
})

module.exports = router;