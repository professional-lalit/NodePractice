const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-student', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-student.html'));
});

// /admin/add-product => POST
router.post('/add-student', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
