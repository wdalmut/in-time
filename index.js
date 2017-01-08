var toTime = function(time) {
  return time.split(':').reduce((memo, item, index) => (index === 0) ? memo + (item * 60) : memo + item);
};

var Time  = function(time) {
  if (!(this instanceof Time)) {
    return new Time(time);
  }

  this.time = toTime(time);
};

Time.prototype.isBefore = function(time) {
  return this.time < time;
};

module.exports = Time;