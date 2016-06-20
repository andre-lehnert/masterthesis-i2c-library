var bar = {
  A1: { 'label': 'A1', 'motor': 0x10, 'led': 0x11, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 },
  A2: { 'label': 'A2', 'motor': 0x12, 'led': 0x13, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 },
  A3: { 'label': 'A3', 'motor': 0x14, 'led': 0x15, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 },

  B1: { 'label': 'B1', 'motor': 0x20, 'led': 0x21, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 },
  B2: { 'label': 'B2', 'motor': 0x22, 'led': 0x23, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 },
  B3: { 'label': 'B3', 'motor': 0x24, 'led': 0x25, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 },

  C1: { 'label': 'C1', 'motor': 0x30, 'led': 0x31, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 },
  C2: { 'label': 'C2', 'motor': 0x32, 'led': 0x33, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 },
  C3: { 'label': 'C3', 'motor': 0x34, 'led': 0x35, 'calibrated': false, 'position': -1, 'animation': '', 'token': 0 }
};


 //------------------------------------------------------------------------------
module.exports.bar = bar;

module.exports = {

  getBarReceiver : function(receiver) {

    if (typeof receiver !== 'string') return -1;

    if (receiver.toUpperCase() === 'A1') return bar.A1;
    if (receiver.toUpperCase() === 'A2') return bar.A2;
    if (receiver.toUpperCase() === 'A3') return bar.A3;

    if (receiver.toUpperCase() === 'B1') return bar.B1;
    if (receiver.toUpperCase() === 'B2') return bar.B2;
    if (receiver.toUpperCase() === 'B3') return bar.B3;

    if (receiver.toUpperCase() === 'C1') return bar.C1;
    if (receiver.toUpperCase() === 'C2') return bar.C2;
    if (receiver.toUpperCase() === 'C3') return bar.C3;

    return -1;
  },

  getBarPosition : function(receiver) {

    if (typeof receiver.label !== 'string') return -1;

    if (receiver.label.toUpperCase() === 'A1') return bar.A1.position;
    if (receiver.label.toUpperCase() === 'A2') return bar.A2.position;
    if (receiver.label.toUpperCase() === 'A3') return bar.A3.position;

    if (receiver.label.toUpperCase() === 'B1') return bar.B1.position;
    if (receiver.label.toUpperCase() === 'B2') return bar.B2.position;
    if (receiver.label.toUpperCase() === 'B3') return bar.B3.position;

    if (receiver.label.toUpperCase() === 'C1') return bar.C1.position;
    if (receiver.label.toUpperCase() === 'C2') return bar.C2.position;
    if (receiver.label.toUpperCase() === 'C3') return bar.C3.position;

    return -1;
  },

  setBarCalibration : function(receiver, status) {

    if (typeof receiver.label !== 'string') return false;

    if (receiver.label.toUpperCase() === 'A1') bar.A1.calibrated = status;
    else if (receiver.label.toUpperCase() === 'A2') bar.A2.calibrated = status;
    else if (receiver.label.toUpperCase() === 'A3') bar.A3.calibrated = status;

    else if (receiver.label.toUpperCase() === 'B1') bar.B1.calibrated = status;
    else if (receiver.label.toUpperCase() === 'B2') bar.B2.calibrated = status;
    else if (receiver.label.toUpperCase() === 'B3') bar.B3.calibrated = status;

    else if (receiver.label.toUpperCase() === 'C1') bar.C1.calibrated = status;
    else if (receiver.label.toUpperCase() === 'C2') bar.C2.calibrated = status;
    else if (receiver.label.toUpperCase() === 'C3') bar.C3.calibrated = status;
    else return false;

    return true;
  },

  setBarPosition : function(receiver, newPosition) {

    if (typeof receiver.label !== 'string') return false;

    if (receiver.label.toUpperCase() === 'A1') bar.A1.position = newPosition;
    else if (receiver.label.toUpperCase() === 'A2') bar.A2.position = newPosition;
    else if (receiver.label.toUpperCase() === 'A3') bar.A3.position = newPosition;

    else if (receiver.label.toUpperCase() === 'B1') bar.B1.position = newPosition;
    else if (receiver.label.toUpperCase() === 'B2') bar.B2.position = newPosition;
    else if (receiver.label.toUpperCase() === 'B3') bar.B3.position = newPosition;

    else if (receiver.label.toUpperCase() === 'C1') bar.C1.position = newPosition;
    else if (receiver.label.toUpperCase() === 'C2') bar.C2.position = newPosition;
    else if (receiver.label.toUpperCase() === 'C3') bar.C3.position = newPosition;
    else return false;

    return true;
  },

  getBarAnimation : function(receiver) {

    if (typeof receiver.label !== 'string') return false;

    if (receiver.label.toUpperCase() === 'A1') return bar.A1.animation;
    else if (receiver.label.toUpperCase() === 'A2') return bar.A2.animation;
    else if (receiver.label.toUpperCase() === 'A3') return bar.A3.animation;

    else if (receiver.label.toUpperCase() === 'B1') return bar.B1.animation;
    else if (receiver.label.toUpperCase() === 'B2') return bar.B2.animation;
    else if (receiver.label.toUpperCase() === 'B3') return bar.B3.animation;

    else if (receiver.label.toUpperCase() === 'C1') return bar.C1.animation;
    else if (receiver.label.toUpperCase() === 'C2') return bar.C2.animation;
    else if (receiver.label.toUpperCase() === 'C3') return bar.C3.animation;
    else return false;

    return true;
  },

  setBarAnimation : function(receiver, animation) {

    if (typeof receiver.label !== 'string') return false;

    if (receiver.label.toUpperCase() === 'A1') bar.A1.animation = animation;
    else if (receiver.label.toUpperCase() === 'A2') bar.A2.animation = animation;
    else if (receiver.label.toUpperCase() === 'A3') bar.A3.animation = animation;

    else if (receiver.label.toUpperCase() === 'B1') bar.B1.animation = animation;
    else if (receiver.label.toUpperCase() === 'B2') bar.B2.animation = animation;
    else if (receiver.label.toUpperCase() === 'B3') bar.B3.animation = animation;

    else if (receiver.label.toUpperCase() === 'C1') bar.C1.animation = animation;
    else if (receiver.label.toUpperCase() === 'C2') bar.C2.animation = animation;
    else if (receiver.label.toUpperCase() === 'C3') bar.C3.animation = animation;
    else return false;

    return true;
  },

  getBarToken : function(receiver) {

    if (typeof receiver.label !== 'string') return false;

    if (receiver.label.toUpperCase() === 'A1') return bar.A1.token;
    else if (receiver.label.toUpperCase() === 'A2') return bar.A2.token;
    else if (receiver.label.toUpperCase() === 'A3') return bar.A3.token;

    else if (receiver.label.toUpperCase() === 'B1') return bar.B1.token;
    else if (receiver.label.toUpperCase() === 'B2') return bar.B2.token;
    else if (receiver.label.toUpperCase() === 'B3') return bar.B3.token;

    else if (receiver.label.toUpperCase() === 'C1') return bar.C1.token;
    else if (receiver.label.toUpperCase() === 'C2') return bar.C2.token;
    else if (receiver.label.toUpperCase() === 'C3') return bar.C3.token;
    else return false;

    return true;
  },

  setBarToken : function(receiver, token) {

    if (typeof receiver.label !== 'string') return false;

    if (receiver.label.toUpperCase() === 'A1') bar.A1.token = token;
    else if (receiver.label.toUpperCase() === 'A2') bar.A2.token = token;
    else if (receiver.label.toUpperCase() === 'A3') bar.A3.token = token;

    else if (receiver.label.toUpperCase() === 'B1') bar.B1.token = token;
    else if (receiver.label.toUpperCase() === 'B2') bar.B2.token = token;
    else if (receiver.label.toUpperCase() === 'B3') bar.B3.token = token;

    else if (receiver.label.toUpperCase() === 'C1') bar.C1.token = token;
    else if (receiver.label.toUpperCase() === 'C2') bar.C2.token = token;
    else if (receiver.label.toUpperCase() === 'C3') bar.C3.token = token;
    else return false;

    return true;
  },

  getBarMotor : function(receiver) {

    if (typeof receiver.label !== 'string') return false;

    if (receiver.label.toUpperCase() === 'A1') return bar.A1.motor;
    else if (receiver.label.toUpperCase() === 'A2') return bar.A2.motor;
    else if (receiver.label.toUpperCase() === 'A3') return bar.A3.motor;

    else if (receiver.label.toUpperCase() === 'B1') return bar.B1.motor;
    else if (receiver.label.toUpperCase() === 'B2') return bar.B2.motor;
    else if (receiver.label.toUpperCase() === 'B3') return bar.B3.motor;

    else if (receiver.label.toUpperCase() === 'C1') return bar.C1.motor;
    else if (receiver.label.toUpperCase() === 'C2') return bar.C2.motor;
    else if (receiver.label.toUpperCase() === 'C3') return bar.C3.motor;
    else return false;

    return true;
  }

};
