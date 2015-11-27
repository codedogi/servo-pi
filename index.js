var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
    io: new raspi()
});

board.on('ready', function(){
    var led1 = led('GPIO27');
    led1.blink(500);


    var servoLeft = servo(5);
    servoLeft.cw(1);
});

var led = function (pin) {
    return new five.Led(pin);
}

var servo = function(pin){
  return new five.Servo({
      type: "continuous",
      pin: pin
  });
};