
//var i2c = require('i2c');
//var MASTER = 0x0f;

//var SLAVE = new i2c(MASTER, {device: '/dev/i2c-1', debug: false});


module.exports = {

  sendMessage : function(address, message) {
    console.log("Send to "+address+": "+message);
    // SLAVE.setAddress(address);
    // var bytes = [];
    //
    // for (var i = 0; i < message.length; ++i) {
    //   bytes.push(message.charCodeAt(i));
    // }
    //
    // SLAVE.writeBytes(0, bytes, function(err) {
    //   if (err != null) {
    //     console.log(err)
    //   } else {
    //     console.log("Send to "+address+": "+message);
    //   }
    // );
  }

}
