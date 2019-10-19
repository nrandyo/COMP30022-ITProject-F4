const CREATE_SCRIPT = 'createscripts.txt'

// var assert = require('assert');
// describe('Basic Mocha String Test', function () {
//  it('should return number of charachters in a string', function () {
//         assert.equal("Hello".length, 4);
//     });
//  it('should return first charachter of the string', function () {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// });

describe('Database Query Testing\n', function() {
    var db = require('../db/db');

    it('Adds new user without error', function(done){
        db.query(`
        INSERT INTO FamilyMember SET FamilyMemberID = 1, 
        Firstname = 'Leon', Lastname = 'Sterling'
        `,
        function(err, result) {
            if (err) {
            done(err);
            } else {
            done();
            }
        });
    });

    //   tobi = new User('tobi'),
    //   loki = new User('loki'),
    //   jane = new User('jane');
  
    // beforeEach(function(done) {
    //   db.clear(function(err) {
    //     if (err) return done(err);
    //     db.save([tobi, loki, jane], done);
    //   });
    // });
  
    // describe('#find()', function() {
    //   it('respond with matching records', function(done) {
    //     db.find({type: 'User'}, function(err, res) {
    //       if (err) return done(err);
    //       res.should.have.length(3);
    //       done();
    //     });
    //   });
    // });
})