var express = require('express')
const router = express.Router()
// const upload = require('../server').upload




router.post('/add-product', upload.single('photo'), function (req, res, next) {
  console.log('<===================================>');
  console.log('<===================================>');
  console.log('<===================================>');
  console.log('body', JSON.stringify(req, null, 4));
  res.send("recieved your request!");

  // console.log('<===================================>');
  // console.log('<===================================>');
  // console.log('<===================================>');
  // console.log('req', req.params);
  // console.log('<===================================>');
  // console.log('<===================================>');
  // console.log('<===================================>');
  // console.log('req', req.query);

  // res.json({msg: 'This is CORS-enabled for all origins!'})
})

module.exports = router