var Entity = function() {
    this.x = 0;
    this.speed = 2; //units/s
}

Entity.prototype.applyInput = function(input) {
    this.x += input.press_time*this.speed;
}

var LagNetwork = function() {
    this.messages = [];
}

