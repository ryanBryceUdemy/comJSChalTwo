var years = [1182, 1982, 1984, 1992, 2010];
var years2 = [1834, 1918, 1984, 1992, 2013, 2009]
var ages = [];
for (var i = 0; i < years.length; i++) {
  var age = 2017 - years[i]
  ages.push(age)
}
console.log(ages);
for (var i = 0; i < ages.length; i++) {
  if(ages[i] >= 18) {
    console.log("i am an adult, my age is " + ages[i]);
  }
}

function printFullAge (arr) {
  var ages = [];
  var values = [];
  for (var i = 0; i < arr.length; i++) {
    var age = 2017 - arr[i];
    ages.push(age)
  }
  for (var i = 0; i < ages.length; i++) {
    if(ages[i] >= 18) {
      values.push(true)
      console.log("i am an adult, my age is " + ages[i]);
    }else {
      values.push(false)
    }
  }
  return values
}

var full_1 = printFullAge(years)
var full_2 = printFullAge(years2)
console.log(full_1);
console.log(full_2);
