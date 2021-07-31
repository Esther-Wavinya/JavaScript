//In object we make variables based on the name of the property

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

const {first, last, time} = runner;
time;   //undefined


const {first, last} = runner;
first;  //"Eliud"
last;  //"Kipchoge"






const {
  country: nation,
  title: honorific
} = runner;

const {
  first,
  last,
  ...other
} = runner;