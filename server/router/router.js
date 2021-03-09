const express = require('express')
const router = express.Router()
router.get('/home/:id',(req,res,next)=> {
    if(req.params.id==='recommend') {
        const swiper = require('../data/swiper.json');
        res.send(swiper);
    }
    const goods = require('../data/goods.json');
    res.send(goods);
});
router.get('/detail',(req,res,next)=> {
    const info = require('../data/info.json');
    res.send(info);
})
router.get('/user',(req,res)=> {
    let query = req.query.id
    res.send(query)
})
//根据query的id返回对应的info数据
module.exports = router;