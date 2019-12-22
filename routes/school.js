const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log('school.js',adminData.students);
  res.render('home',{pageTitle: 'Home', path:'/', studentList : adminData.students});
});

module.exports = router;
