const 
  admin = require('firebase-admin'),
  serviceAccount = require('./Keys/ServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore(); 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/companies', (req, res) => {
  db.collection('companies').get().then((doc) => {
    if(!doc.exists){
      console.log('no record');
      res.sendStatus(404);
    }
    let companies = [];
    doc.forEach(company=>{
      companies.push(company.data())
    })
    res.json(companies);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  })
});

app.post('/companies', (req, res) => {
  let company = {
    name: req.body.name,
    number_of_employees: req.body.number_of_employees
  }
  //db.collection('sample').doc('company').add(company).then(() => {
  db.collection('companies').add(company).then(() => {
    console.log("quote was written to database");
    res.sendStatus(201)
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
