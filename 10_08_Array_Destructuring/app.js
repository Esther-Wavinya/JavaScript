//DESTRUCTURING
//A short, clean syntax to 'unpack': values from arrays, properties from objects into distinct variables.


const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

// The old way: 
const gold = raceResults[0]
const silver = raceResults[1]
const bronze = raceResults[2]
gold;     //"Eliud Kipchoge"
silver;     //"Feyisa Lelisa"
bronze;     //"Galen Rupp"






// Using Destructuring: much cleaner, shorter
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

//commas for skipping elements
const [first, , , fourth] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'


//using rest:
const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

//skip elements using commas
const [winner, , ...others] = raceResults;
winner; //'Eliud Kipchoge'
others;    //"Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]