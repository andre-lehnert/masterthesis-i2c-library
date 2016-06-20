var should = require('chai').should(),
    app = require('../i2c-module'),
    api = require('../app/api-model');

    stepMode = app.stepMode,
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


describe('### DEBUGGING-API v2', function() {

  describe('## I2C COMMUNICATION', function() {
    // MOVE:100/half
    // MOVE:75/half
    // MOVE:50/quarter
    // MOVE:0/eigthth
    it('MOVE:100/half', function() {
        api.getMoveMessage(100, 'half').should.equal('MOVE:100/half');
    });
    it('MOVE:75/halfh', function() {
        api.getMoveMessage(75, 'halfh').should.equal('MOVE:75/halfh');
    });
    it('MOVE:50/quarter', function() {
        api.getMoveMessage(50, 'quarter').should.equal('MOVE:50/quarter');
    });
    it('MOVE:0/eigthth', function() {
        api.getMoveMessage(0, 'eigthth').should.equal('MOVE:0/eigthth');
    });

    // UP:x    // no integer -> default value: 400
    // UP:100
    it('UP:x', function() {
        api.getUpMessage('').should.equal('UP:');
    });
    it('UP:100', function() {
        api.getUpMessage('100').should.equal('UP:100');
    });

    // DOWN:x    // no integer -> default value: 400
    // DOWN:100
    it('DOWN:x', function() {
        api.getDownMessage('').should.equal('DOWN:');
    });
    it('DOWN:100', function() {
        api.getDownMessage('100').should.equal('DOWN:100');
    });

    // INIT:top/15600   // max position (steps to reach 100%)
    // INIT:bottom/0    // min position
    // INIT:10/01-cb-18-4f-0e-00-00-96 // id + token serial number
    // INIT:calibrate   // calibrate stepper & virtual position state
    it('INIT:top/15600', function() {
        api.getTopMessage('15600').should.equal('INIT:top/15600');
    });

    it('INIT:bottom/0', function() {
        api.getBottomMessage('0').should.equal('INIT:bottom/0');
    });

    it('INIT:10/01-cb-18-4f-0e-00-00-96', function() {
        api.getTokenMessage('10', '01-cb-18-4f-0e-00-00-96').should.equal('INIT:10/01-cb-18-4f-0e-00-00-96');
    });

    it('INIT:calibrate', function() {
        api.getCalibrateMessage().should.equal('INIT:calibrate');
    });

  });

  describe('## MOVE', function() {

    // -------------------------------------------------------------------------
    // invalid invokations
    describe('# invalid invokations', function() {

      it('MOVE:', function() {
        move('', '', '').should.equal(false);
      });

      it('0x10;MOVE:', function() {
        move(0x10, '', '').should.equal(false);
      });

      it('0x09;MOVE:', function() {
        move(0x09, '', '').should.equal(false);
      });

      it('0x10;MOVE:/half', function() {
        move(0x10, '', 'half').should.equal(false);
      });

      it('0x10;MOVE:-1/half', function() {
        move(0x10, -1, 'half').should.equal(false);
      });

      it('0x10;MOVE:-1', function() {
        move(0x10, -1, '').should.equal(false);
      });

      it('0x10;MOVE:101', function() {
        move(0x10, 101, '').should.equal(false);
      });

      it('0x10;MOVE:100/xxxx', function() {
        move(0x10, 100, 'xxxx').should.equal(false);
      });

    });

    // -------------------------------------------------------------------------
    // valid invokations
    describe('# valid invokations', function() {

      // -----------------------------------------------------------------------
      // 0 %
      it('0x10;MOVE:0', function() {
        move(0x10,  0, '').should.equal(true);
      });

      it('0x10;MOVE:0/half', function() {
        move(0x10,  0, 'half').should.equal(true);
      });

      it('0x10;MOVE:0/quarter', function() {
        move(0x10,  0, 'quarter').should.equal(true);
      });

      it('0x10;MOVE:0/eigthth', function() {
        move(0x10,  0, 'eigthth').should.equal(true);
      });

      // -----------------------------------------------------------------------
      // 50 %
      it('0x10;MOVE:50/half', function() {
        move(0x10, 50, 'half').should.equal(true);
      });

      it('0x10;MOVE:50/quarter', function() {
        move(0x10, 50, 'quarter').should.equal(true);
      });

      it('0x10;MOVE:50/eigthth', function() {
        move(0x10, 50, 'eigthth').should.equal(true);
      });

      // 100 %
      it('0x10;MOVE:100/half', function() {
        move(0x10, 100, 'half').should.equal(true);
      });

      it('0x10;MOVE:100/quarter', function() {
        move(0x10, 100, 'quarter').should.equal(true);
      });

      it('0x10;MOVE:100/eigthth', function() {
        move(0x10, 100, 'eigthth').should.equal(true);
      });

    });

  });

  // ---------------------------------------------------------------------------
  describe('## LIGHT', function() {
    // -------------------------------------------------------------------------
    // invalid invokations
    describe('# invalid invokations', function() {


    });

    // -------------------------------------------------------------------------
    // valid invokations

    // LIGHT:A/+/1/ffaa00/100    // Add
    // LIGHT:A/+/1/ffeeee/100    // Update
    // LIGHT:A/-/1               // Remove
    // LIGHT:B/*                 // New
    // LIGHT:B/-/11              // Remove (side B all leds off)
    describe('# valid invokations', function() {

      it('0x11;LIGHT:A/+/1/ffaa00/100', function() {
        light(0x11, 'A', '+', 1, 'ffaa00', 100).should.equal(true);
      });

      it('0x11;LIGHT:A/+/1/ffeeee/100', function() {
        light(0x11, 'A', '+', 1, 'ffee00', 100).should.equal(true);
      });

      it('0x11;LIGHT:A/-/1', function() {
        light(0x11, 'A', '-', 1, '', '').should.equal(true);
      });

      it('0x11;LIGHT:B/*', function() {
        light(0x11, 'B', '*', '', '', '').should.equal(true);
      });

      it('0x11;LIGHT:B/-/11', function() {
        light(0x11, 'B', '-', 11, '', '').should.equal(true);
      });


    });
  });

  // ---------------------------------------------------------------------------
  describe('## ANIMATION', function() {
    // -------------------------------------------------------------------------
    // invalid invokations
    describe('# invalid invokations', function() {

    });

    // -------------------------------------------------------------------------
    // valid invokations
    describe('# valid invokations', function() {

      // ANI:glo/ff0000/100/50
      // ANI:bli/ffff00/50/100
      // ANI:mov/ffffff/50/75
      it('0x11;ANI:glo/ff0000/100/50', function() {
        animation(0x11, 'glo', 'ff0000', '100', '50').should.equal(true);
      });

      it('0x11;ANI:bli/00ff00/50/100', function() {
        animation(0x11, 'bli', '00ff00', '50', '100').should.equal(true);
      });

      it('0x11;ANI:mov/33aaff/50/75', function() {
        animation(0x11, 'mov', '33aaff', '50', '75').should.equal(true);
      });
    });
  });

  // ---------------------------------------------------------------------------
  describe('## STATUS', function() {

    // -------------------------------------------------------------------------
    // valid invokations
    describe('# valid invokations', function() {

      it('0x10;STATUS:', function() {
        status(0x10).should.equal(-1);
      });

    });
  });

});
