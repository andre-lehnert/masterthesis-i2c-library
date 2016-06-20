var api = {
  debug: {
    v2: {
      CALIBRATE: 'INIT:calibrate',
      TOP: 'INIT:top/[param]',
      BOTTOM: 'INIT:bottom/[param]',
      TOKEN: 'INIT:[id]/[serial]',
      MOVE: 'MOVE:[position]/[speed]',
      UP: 'UP:[steps]',
      DOWN: 'DOWN:[steps]',
      LIGHT: 'LIGHT:[side]/[operation]/[led]/[color]/[brightness]',
      ANIMATION: 'ANI:[animation]/[color]/[brightness]/[speed]'
    },
    v1: {
      CALIBRATE: 'INIT:calibrate',
      TOP: 'INIT:top/[param]',
      BOTTOM: 'INIT:bottom/[param]',
      TOKEN: 'INIT:[id]/[serial]',
      MOVE: 'MOVE:[position]/[speed]',
      UP: 'UP:[steps]',
      DOWN: 'DOWN:[steps]',
      ANIMATION: 'LIGHT:[animation]/[color]/[brightness]/[speed]'
    }
  }
};



// -----------------------------------------------------------------------------

module.exports = {

  getMoveMessage : function(position, speed) {
    var msg = api.debug.v2.MOVE;

    msg = msg.replace("[position]", position)
             .replace("[speed]", speed);

    return msg;
  },

  getCalibrateMessage : function() {
    var msg = api.debug.v2.CALIBRATE;

    return msg;
  }
};
