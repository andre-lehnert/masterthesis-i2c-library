var should = require('chai').should(),
    app = require('../i2c-module'),
    api = require('../app/api-model');

var stepMode = app.stepMode,
    bar = app.bar,
    move = app.move,
    light = app.light,
    animation = app.animation,
    status = app.status;

var value;

describe('### TEST A1', function() {

  it('0x11;LIGHT:A/*', function() {
    light(0x11, 'A', '*', '', '', '').should.equal(true);
  });

  it('0x11;LIGHT:A/+/1/ffaa00/100', function() {
    light(0x11, 'A', '+', 1, 'ffaa00', 100).should.equal(true);
  });

  it('0x11;LIGHT:A/+/3/ffaa00/100', function() {
    light(0x11, 'A', '+', 3, 'ffaa00', 100).should.equal(true);
  });

  it('0x11;LIGHT:A/+/5/ffaa00/100', function() {
    light(0x11, 'A', '+', 5, 'ffaa00', 100).should.equal(true);
  });

  it('0x11;LIGHT:A/+/7/ffaa00/100', function() {
    light(0x11, 'A', '+', 7, 'ffaa00', 100).should.equal(true);
  });

  it('0x11;LIGHT:A/+/9/ffaa00/100', function() {
    light(0x11, 'A', '+', 9, 'ffaa00', 100).should.equal(true);
  });


});
