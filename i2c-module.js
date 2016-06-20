/**
 * Scapegoat
 * https://github.com/brentertz/scapegoat
 *
 * Copyright (c) 2014 Brent Ertz
 * Licensed under the MIT license.
 */

var util = require('util'),
    bar = require('./app/bar-model'),
    move = require('./app/move-model'),
    i2c = require('./app/i2c-communication'),
    api = require('./app/api-model'),
    stepMode = move.stepMode,
    moveResponse = move.moveResponse,
    movingDirection = move.movingDirection;





/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} receiver
 * @param  {Number} position
 * @param  {String} speed
 * @return {Boolean}
 */
var move = function(receiver, position, speed) {

    var barReceiver = -1;

    // -------------------------------------------------------------------------
    // Validate
    if (
      typeof receiver !== 'string' ||
      typeof receiver === 'undefined'
    ) {
      if (typeof receiver === 'object') {
        if (typeof receiver.label === 'string') {
          barReceiver = receiver;
        } else {
          return false;
        }
      }
    }

    if (
      typeof position === 'string' ||
      typeof position === 'undefined' ||
      position < 0 ||
      position > 100
    ) {
      return false;
    }

    if (speed === '' || typeof position === 'undefined') speed = stepMode.HALF;

    if (speed != stepMode.FULL) {
      if (speed != stepMode.HALF) {
        if (speed != stepMode.QUARTER) {
          if (speed != stepMode.EIGTHTH) {
            if (speed != stepMode.SIXTEETH) {
              return false;
            }
          }
        }
      }
    }

    // Get Receiver/ Bar
    if (barReceiver === -1) {
      barReceiver = bar.getBarReceiver(receiver);
      if (barReceiver === -1) return false; // No Receiver found
    }

    //console.log("MOVE:"+barReceiver.label+"/"+position+"/"+speed);

    // -------------------------------------------------------------------------
    // 2) Parse Resonse Object Parameter

    // Duplicate JSON Resonse Object
    var response = moveResponse;

    // -------------------------------------------------------------------------
    // Check calibration
    if (! barReceiver.calibrated) {

      i2c.sendMessage( bar.getBarMotor(barReceiver), api.getCalibrateMessage());


      // Send calibration
      bar.setBarCalibration(barReceiver, true);

      bar.setBarPosition(barReceiver, 0);


    }

    // -------------------------------------------------------------------------
    // Set receiver
    response.receiver = barReceiver.label;


    // -------------------------------------------------------------------------
    // Check old position
    response.positionOld = bar.getBarPosition(barReceiver);

    // -------------------------------------------------------------------------
    // Set stepmode
    response.stepmode = speed;

    // -------------------------------------------------------------------------
    // Set new position
    bar.setBarPosition(barReceiver, position);

    response.positionTarget = bar.getBarPosition(barReceiver);


    // -------------------------------------------------------------------------
    // Check moving direction & position difference
    if (response.positionOld < response.positionTarget) {

      response.direction = movingDirection.UP;
      response.difference = response.positionTarget - response.positionOld;

    } else if (response.positionOld > response.positionTarget) {

      response.direction = movingDirection.DOWN;
      response.difference = response.positionOld - response.positionTarget;

    } else {

      response.direction = movingDirection.NONE;
      response.difference = 0;

    }

    // 3) Send I2C-Request
    i2c.sendMessage( bar.getBarMotor(barReceiver), api.getMoveMessage(position, speed) );

    // -------------------------------------------------------------------------
    //console.log(response);
    //console.log(util.inspect(response, {showHidden: true, depth: null}));
    return true;
};

module.exports.move = move;

// ------------------------------------------------------------------------
var light = function(receiver, side, operation, led, color, brightness) {

  var barReceiver = -1;

  // ----------------------------------------------------------------------
  // Validate
  if (
    typeof receiver !== 'string' ||
    typeof receiver === 'undefined'
  ) {
    if (typeof receiver === 'object') {
      if (typeof receiver.label === 'string') {
        barReceiver = receiver;
      } else {
        return false;
      }
    }
  }

  //TODO

  // Get Receiver/ Bar
  if (barReceiver === -1) {
    barReceiver = bar.getBarReceiver(receiver);
    if (barReceiver === -1) return false; // No Receiver found
  }

  // ----------------------------------------------------------------------

  bar.setBarPosition(barReceiver, position);


  i2c.sendMessage( bar.getBarMotor(barReceiver), api.getLightMessage( //TODO ) );
}
