var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer()
const router = express.Router()

// app.use(upload.array())

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './uploads/');
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname)
  }
}); 
upload = multer({ storage: storage });

app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array());
// app.use(express.static('public'));

var allowlist = ['http://localhost:3000']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

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

app.get('/allow_cors', cors(), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for a Single Route' })
})

// app.use('/api', cors(corsOptionsDelegate), require('./api/index')
app.use('/api', cors(corsOptionsDelegate), router)


app.listen(3002, function () {
  console.log('CORS-enabled web server listening on port 3002')
})

// /products/add-product