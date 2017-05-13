//swap with tmp
Array.prototype.swap_v1 = function(i,j) {
  var tmp = this[i];
  this[i] = this[j];
  this[j] = tmp;
  return this;
}

//swap without tmp
Array.prototype.swap_v2 = function(i,j) {
  this[i] = this[i] + this[j];
  this[j] = this[i] - this[j]; //now this[j] holds the value of this[i]
  this[i] = this[i] - this[j]; //now this is essentiall = this[i] + this[j] - this[i] = this[j] !
  return this;
}

var arr = [1,2];
var newArr = arr.swap_v1(0,1);
console.log(newArr);

var arr = [1,2];
var newArr = arr.swap_v2(0,1);
console.log(newArr);
