var should = require('chai').should(),
    i2c = require('../i2c-module');

    stepMode = i2c.stepMode,
    bar = i2c.bar,
    move = i2c.move;

describe('### DEBUGGING-API v2', function() {

  describe('## MOVE', function() {

it('MOVE:A1/100/half', function() {
        move('A1', 100, 'half').should.equal(true);
      });


/*
    // -------------------------------------------------------------------------
    // invalid invokations
    describe('# invalid invokations', function() {

      it('MOVE:', function() {
        move('', '', '').should.equal(false);
      });

      it('MOVE:A1', function() {
        move('A1', '', '').should.equal(false);
      });

      it('MOVE:A0', function() {
        move('A0', '', '').should.equal(false);
      });

      it('MOVE:A1//half', function() {
        move('A1', '', stepMode.HALF).should.equal(false);
      });

      it('MOVE:A1/-1/half', function() {
        move('A1', -1, stepMode.HALF).should.equal(false);
      });

      it('MOVE:A1/-1', function() {
        move('A1', -1, '').should.equal(false);
      });

      it('MOVE:A1/101', function() {
        move('A1', 101, '').should.equal(false);
      });

      it('MOVE:A1/100/xxxx', function() {
        move('A1', 100, 'xxxx').should.equal(false);
      });

    });

    // -------------------------------------------------------------------------
    // valid invokations
    describe('# valid invokations', function() {

      // -----------------------------------------------------------------------
      // 0 %
      it('MOVE:A1/0', function() {
        move('A1', 0, '').should.equal(true);
      });

      it('MOVE:A1/0/half', function() {
        move('A1', 0, stepMode.HALF).should.equal(true);
      });

      it('MOVE:A1/0/quarter', function() {
        move('A1', 0, 'quarter').should.equal(true);
      });

      it('MOVE:A1/0/eigthth', function() {
        move('A1', 0, 'eigthth').should.equal(true);
      });

      // -----------------------------------------------------------------------
      // 50 %
      it('MOVE:A1/50/half', function() {
        move('A1', 50, 'half').should.equal(true);
      });

      it('MOVE:A1/50/quarter', function() {
        move('A1', 50, 'quarter').should.equal(true);
      });

      it('MOVE:A1/50/eigthth', function() {
        move('A1', 50, 'eigthth').should.equal(true);
      });

      // 100 %
      it('MOVE:A1/100/half', function() {
        move('A1', 100, 'half').should.equal(true);
      });

      it('MOVE:A1/100/quarter', function() {
        move('A1', 100, 'quarter').should.equal(true);
      });

      it('MOVE:A1/100/eigthth', function() {
        move('A1', 100, 'eigthth').should.equal(true);
      });

      // -----------------------------------------------------------------------
      // All Bars
      // Use Variable "bar"
      // Use Variable "stepMode"
      it('MOVE:A1/75/half', function() {
        move(bar.A1, 75, stepMode.HALF).should.equal(true);
      });

      it('MOVE:B1/75/half', function() {
        move(bar.B1, 75, stepMode.HALF).should.equal(true);
      });

      it('MOVE:C1/75/half', function() {
        move(bar.C1, 75, stepMode.HALF).should.equal(true);
      });

      it('MOVE:A2/75/half', function() {
        move(bar.A2, 75, stepMode.HALF).should.equal(true);
      });

      it('MOVE:B2/75/half', function() {
        move(bar.B2, 75, stepMode.HALF).should.equal(true);
      });

      it('MOVE:C2/75/half', function() {
        move(bar.C2, 75, stepMode.HALF).should.equal(true);
      });

      it('MOVE:A3/75/half', function() {
        move(bar.A3, 75, stepMode.HALF).should.equal(true);
      });

      it('MOVE:B3/75/half', function() {
        move(bar.B3, 75, stepMode.HALF).should.equal(true);
      });

      it('MOVE:C3/75/half', function() {
        move(bar.C3, 75, stepMode.HALF).should.equal(true);
      });

    });
*/
  });

  // ---------------------------------------------------------------------------
  describe('LIGHT', function() {

  });

  // ---------------------------------------------------------------------------
  describe('ANI', function() {

  });

  // ---------------------------------------------------------------------------
  describe('STATUS', function() {

  });

});
