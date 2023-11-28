var express = require('express');
var router = express.Router();

const jobs = require('../jobmodel/files')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});
router.post('/create',async function(req, res, next) {
  try {
    const job = new jobs(req.body)
    await job.save()
    res.redirect('/alljobs')
  } catch (error) {
    res.send(error)
  }
});
router.get('/alljobs',async function(req, res, next) {
  try {
    const all = await jobs.find()
    res.render('alljobs', { jobs:all });
  } 
  catch (error) {
    res.send(error)
  }
});
router.get('/apply',async function(req, res, next) {
  try {
   const aply = await jobs.find()

    res.render('apply', { jobs: aply});
  } catch (error) {
    res.send(error)
  }
 
});
router.get('/delete/:id',async function(req, res, next) {
  try {
     await jobs.findByIdAndDelete(req.params.id)

    res.redirect('/alljobs')
  } catch (error) {
    res.send(error)
  }
});
router.get('/update/:id',async function(req, res, next) {
 try {
   const update = await jobs.findById(req.params.id)
  res.render('update', {up: update});
 } catch (error) {
  res.send(error)
 }
});
router.post('/update/:id',async function(req, res, next) {
  try {
    await jobs.findByIdAndUpdate(req.params.id,req.body)
    res.redirect(`/alljobs`);
  } catch (error) {
    res.send(error)
  }
});
module.exports = router;
