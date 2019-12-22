const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const students = [];

// /admin/add-product => GET  
router.get('/add-student', (req, res, next) => {
  res.render('add-student', { pageTitle: 'Add Student', path: '/admin/add-student' });
});

// /admin/add-product => POST
router.post('/add-student', (req, res, next) => {
  console.log(req.body.first_name);
  students.push({ student_name: req.body.first_name });
  res.redirect('/');
});

exports.routes = router;
exports.students = students;
