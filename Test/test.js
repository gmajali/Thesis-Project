var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;
var connection = require('../database/Schema.js');
var dbOpt = require('../database/dbOpt.js');
// test the localhost:3000 connection
describe('Server Test', function () {
// right path
   describe('Connection Test', function () {
     it('Should have a response from the server ', function (done) {
       request('http://localhost:3000')
       .post('/api/initializeDB').expect(200, done)
     })
// right path
     it('should resived error from the server with wrong path ', function (done) {
       request('http://localhost:3000').get('/wrong').expect(404, done)
     })
     it('Should get all Charities', function(done){
       dbOpt.getAllChar(1, function(err, result){
         if (err) {
           // console.log(err)
           done(err)
         } else {
           expect(result).to.be.not.null;
           done()
         }
       })
     })
   })
  })
