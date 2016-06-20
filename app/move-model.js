var stepMode = {
  FULL :     'full',
  HALF :     'half',
  QUARTER:   'quarter',
  EIGTHTH :  'eigthth',
  SIXTEETH : 'sixteenth'
};

module.exports.stepMode = stepMode;

var movingDirection = {
 UP : 'up',
 DOWN : 'down',
 NONE : 'none'
};

module.exports.movingDirection = movingDirection;

var moveResponse = {
 href: '',
 receiver: '',
 positionTarget: -1,
 positionOld: -1,
 direction: '',
 difference: -1,
 stepmode: ''
};

module.exports.moveResponse = moveResponse;
